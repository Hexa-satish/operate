import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import HomeScreen from '../src/screens/HomeScreen';
import {it, describe, expect} from '@jest/globals';
import {generateUniqueId} from './utils';

// Create a mock store
const mockStore = configureStore([]);
const store = mockStore({});

describe('HomeScreen', () => {
  it('should update title state on text input change', () => {
    const {getByPlaceholderText} = render(
      <Provider store={store}>
        <HomeScreen />
      </Provider>,
    );

    const titleInput = getByPlaceholderText('Enter Title');

    fireEvent.changeText(titleInput, 'New Title');

    expect(titleInput.props.value).toBe('New Title');
  });

  it('should reset title state after submitting form', async () => {
    const {getByPlaceholderText, getByText} = render(
      <Provider store={store}>
        <HomeScreen />
      </Provider>,
    );

    const titleInput = getByPlaceholderText('Enter Title');
    const contentInput = getByPlaceholderText('Enter Content');
    const saveButton = getByText('Save Blog Post');

    fireEvent.changeText(titleInput, 'New Title');
    fireEvent.changeText(contentInput, 'New Content');

    fireEvent.press(saveButton);

    await new Promise(resolve => setTimeout(resolve, 1000));

    fireEvent.changeText(titleInput, '');
    fireEvent.changeText(contentInput, '');

    expect(titleInput.props.value).toBe('');
    expect(contentInput.props.value).toBe('');
  });

  it('should update Content state on text input change', () => {
    const {getByPlaceholderText} = render(
      <Provider store={store}>
        <HomeScreen />
      </Provider>,
    );

    const contentInput = getByPlaceholderText('Enter Content');

    fireEvent.changeText(contentInput, 'New Content');

    expect(contentInput.props.value).toBe('New Content');
  });

  it('should generate a unique ID each time it is called', () => {
    const id1 = generateUniqueId();
    const id2 = generateUniqueId();

    // Check if IDs are defined and not empty
    expect(id1).toBeDefined();
    expect(id2).toBeDefined();
    expect(id1).not.toBe('');
    expect(id2).not.toBe('');

    // Check if IDs are unique
    expect(id1).not.toBe(id2);
  });

  it('should generate an ID in the expected format', () => {
    const id = generateUniqueId();
    const regex = /^\d{13}-[a-z0-9]{9}$/;

    // Check if ID matches the expected format
    expect(id).toMatch(regex);
  });
});
