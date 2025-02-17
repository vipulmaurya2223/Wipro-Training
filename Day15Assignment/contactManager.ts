// Define the Contact interface
interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
  }
  
  // Implement the ContactManager class
  class ContactManager {
    private contacts: Contact[] = [];
  
    addContact(contact: Contact): void {
      this.contacts.push(contact);
      console.log(`Contact added successfully: ${contact.name}`);
    }
  
    viewContacts(): Contact[] {
      return this.contacts;
    }
  
    modifyContact(id: number, updatedContact: Partial<Contact>): void {
      const contact = this.contacts.find(c => c.id === id);
      if (!contact) {
        console.log(`Error: Contact with ID ${id} not found.`);
        return;
      }
      Object.assign(contact, updatedContact);
      console.log(`Contact modified successfully: ${contact.name}`);
    }
  
    deleteContact(id: number): void {
      const index = this.contacts.findIndex(c => c.id === id);
      if (index === -1) {
        console.log(`Error: Contact with ID ${id} not found.`);
        return;
      }
      const deletedContact = this.contacts.splice(index, 1);
      console.log(`Contact deleted successfully: ${deletedContact[0].name}`);
    }
  }
  
  // Testing the Contact Manager
  const contactManager = new ContactManager();
  
  contactManager.addContact({ id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890" });
  contactManager.addContact({ id: 2, name: "Jane Smith", email: "jane@example.com", phone: "0987654321" });
  
  console.log("All Contacts:", contactManager.viewContacts());
  
  contactManager.modifyContact(1, { phone: "1112223333" });
  console.log("Contacts after modification:", contactManager.viewContacts());
  
  contactManager.deleteContact(2);
  console.log("Contacts after deletion:", contactManager.viewContacts());
  
  contactManager.modifyContact(3, { name: "New Name" });
  contactManager.deleteContact(3);
  