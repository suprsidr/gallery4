import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { navigate } from 'hookrouter';
import Form from './styles/Form';
import Error from './ErrorMessage';

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

// type Item {
//   id: ID! @id
//   title: String!
//   description: String!
//   type: String!
//   tags: [String] @scalarList(strategy: RELATION)
//   image: String!
//   slug: String
//   owner: User!
//   createdAt: DateTime! @createdAt
//   updatedAt: DateTime @updatedAt
// }

const CreateItem = () => {
  const [state, setState] = useState({
    title: '',
    description: '',
    image: '',
    type: '',
    tags: [],
    slug: '',
    price: 0,
  });

  const handleChange = e => {
    const { name, type, value } = e.target;
    let val = type === 'number' ? parseFloat(value) : value;
    if(name === 'tags') val = value.replace(/, /g, ',').split(',');
    setState({ ...state, [name]: val });
  };

  const uploadFile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'gallery4');

    const res = await fetch('https://api.cloudinary.com/v1_1/suprsidr/image/upload', {
      method: 'POST',
      body: data,
    });
    const file = await res.json();
    setState({
      ...state,
      image: file.secure_url,
      largeImage: file.eager[0].secure_url,
    });
  };

  return (
    <Mutation mutation={CREATE_ITEM_MUTATION} variables={state}>
      {(createItem, { loading, error }) => (
        <Form
          data-test="form"
          onSubmit={async e => {
            // Stop the form from submitting
            e.preventDefault();
            // call the mutation
            const res = await createItem();
            // change them to the single item page
            console.log(res);
            navigate(`/albums/${res.data.createItem.id}`)
          }}
        >
          <Error error={error} />
          <fieldset disabled={loading} aria-busy={loading}>
            <label htmlFor="file">
              Image
              <input
                type="file"
                id="file"
                name="file"
                placeholder="Upload an image"
                required
                onChange={uploadFile}
              />
              {state.image && (
                <img width="200" src={state.image} alt="Upload Preview" />
              )}
            </label>

            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                required
                value={state.title}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="type">
              Type
              <select id="type" name="type" onChange={handleChange}>
                <option value="album" selected>Album</option>
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>
            </label>

            <label htmlFor="tags">
              Tags(comma delimited)
              <input
                type="text"
                id="tags"
                name="tags"
                placeholder="Tag1, Tag2, Tag3"
                required
                value={state.tags}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="description">
              Description
              <textarea
                id="description"
                name="description"
                placeholder="Enter A Description"
                required
                value={state.description}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Submit</button>
          </fieldset>
        </Form>
      )}
    </Mutation>
  );
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };
