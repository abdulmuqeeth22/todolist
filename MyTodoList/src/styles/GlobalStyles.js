import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 70,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  todoItem: {
    backgroundColor: '#B0E0E6',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  todoText: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 15,
    borderRadius: 10,
    flex: 1,
  },
  cancelButton: {
    backgroundColor: '#ff4d4d',
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: '#00cc66',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10, 
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    height: 100,
    textAlignVertical: 'top',
  },
});

export default GlobalStyles;
