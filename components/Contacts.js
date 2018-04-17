class Contacts extends React.component {
  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  render() {
    class contacts = this.props.items.map(function(contact) {
      return <Contact item=contact key=contact.id>
    };

    return (
      <ul className={'contactsList'} {contacts}
    );
  }
};