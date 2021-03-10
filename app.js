//Init Github
const github = new Github;

//Init UI
const ui = new UI;

// Search Input
const searchUser = document.querySelector('#searchUser');

// Search Input Event listeners
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {

    // Make https call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show Alert
          ui.showAlert('Name not found', 'alert error')

        } else {
          // Show Profile
          ui.showProfile(data.profile)
          // Show repos
          ui.showRepos(data.repos);
        }
      })

  } else {

    // Clear Profile
    ui.clearProfile()
  }

})
