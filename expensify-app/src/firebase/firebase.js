import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

/* // child_removed
database.ref('expenses').on('child_removed', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

//child_added
database.ref('expenses').on('child_added', snapshot => {
  console.log(snapshot.key, snapshot.val());
});
 */
/* database.ref('expenses').on('value', snapshot => {
  const expenses = [];

  snapshot.forEach(childSnapshot => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });
  console.log(expenses);
}); */

/* database
  .ref('expenses')
  .once('value')
  .then(snapshot => {
    const expenses = [];

    snapshot.forEach(childSnapshot => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(expenses);
  }); */

/* database
  .ref('expenses')
  .once('value')
  .then(snapshot => {
    console.log(snapshot.val());
  }); */

/* database.ref('expenses').push({
  description: 'Rent',
  note: 'Needs to be paid',
  amount: 1234,
  createdAt: 'November 30'
});

database.ref('expenses').push({
  description: 'Cable',
  note: 'Needs to be paid',
  amount: 789,
  createdAt: 'November 12th'
});

database.ref('expenses').push({
  description: 'Water',
  note: 'Paid',
  amount: 456,
  createdAt: 'November 1st'
}); */

/*const firebaseNotes = {
        notes: {
            fkdsfksa: {
                title: 'This is my first note',
                body: 'Body for the first note'
            },
            kdkfdafjdsf: {
                title: 'This is the second note',
                body: 'Body for the second note'
            }
        }
    }

    const notes = [{
        id: '1',
        title: '1st Note',
        body: 'This is the body of the first note'
    }, {
        id: '6adshk',
        title: '2nd Note',
        body: 'This is the body of the second note'
    }]*/

/*database.ref('notes').push({
        title: 'Second Note',
        body: 'Second Note Body'
    });*/

/*database.ref().on('value',(snapshot) => {
        const name = snapshot.val().name
        const title = snapshot.val().job.title
        const company = snapshot.val().job.company
        console.log(`${name} is a ${title} at ${company}`)
    })*/

/*database.ref('location')
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val()
        console.log(val)

    })
    .catch((e) => {
        console.log('Error fetching data ', e)
    })

*/

/*  database.ref().set({
      name: 'Brandon Smith',
      age: 26,
      stressLevel: 6,
      job: {
          title: 'Front End Dev',
          company: 'Red Dirt Web Design'
      },
      isSingle: false,
      location: {
          city: 'Goodyear',
          state: 'Arizona'
      },
      phone: '602-748-8262'
  }).then(() => {
      console.log('Data is saved')
  }).catch((error) => {
      console.log('This failed: ', error)
  })

database.ref('Attributes').set({
    height: '6ft 7in',
    weight: '205lbs'
}).then(() => {
    console.log('Attributes Data Saved')
}).catch((e) => {
    console.log('Could Not Save Attribute Data Because: ', e)
})


// database.ref('isSingle').remove(() => {

// }).then(() => {
//     console.log('Item Removed')
// }).catch((e) => {
//     console.log('Couldnt\' Remove', e)
// })

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'San Fransico'
})*/
