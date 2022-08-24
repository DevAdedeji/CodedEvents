export default function ({ store, redirect }) {
    // If the user is not authenticated
    if ( !localStorage.getItem("codedEvents_USER_TOKEN")) {
      return redirect('/login')
    }
  }