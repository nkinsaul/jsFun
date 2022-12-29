const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { boardGames } = require('./datasets/boardGames');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');



// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangePetNames(petData) {
    
    const orangeKitties = petData.filter((cat) => {
      return cat.color === 'orange';
    });

    const orangeKittyNames = orangeKitties.map((cat) => {
      return cat.name;
    })

    return orangeKittyNames;


        /* CODE GOES HERE */

    // Annotation:
    // The filter method call that is assigned to the variable orangeKitties.  This method will store a new array of kitties that is only kitties with the property of 'orange'.   On the next block of code the map filter will be called on this new array and will return only the names of the cats in that array.  This will result in the value of 'Tiger', 'Snickers' being assigned to the variable orangeKittyNames
  },

  sortByAge(petData) {
    // Sort the kitties by their age

    const kittiesByAge = petData.sort((a, b) => {
      return b.age - a.age;
    })
    
    return kittiesByAge;
    
    // Annotation:
    // I want to look through the kitty array and sort the kitties by their age.  Will probably use the sort prototype method to do this.  I want to return the kitties in descending order
  },

  growUp(petData) {
    // Return an array of kitties who have all grown up by 2 years e.g.
   
    const grownUpKitties = petData.reduce((acc, kitty) => {
      kitty.age += 2
      acc.push(kitty);
      return acc
    }, [])
    return grownUpKitties;
  }
};

//I want to add 2 to the age property of all of the kitties.  This will return a new array of all the kitties with the new value of age.  I will probably want to use the map prototype method to do this since I am creating a new array based off the old array with a value changed and returning an array of the same length.

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs(data) {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    return data.reduce ((acc, club) => {
      club.members.forEach(member => { 
        { 
          acc[member] ? acc[member].push(club.club) :
          acc[member] = [club.club];
        }
      })
      return acc
    },{});

    // Annotation:

    // I need to return an object.  Will probably use reduce to do this.  I also need to create an array within the object...the key will be the name of the person and the value of that property will be the clubs the person is a part of in an array.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    return mods.map(mod => {
      return { mod: mod.mod, studentsPerInstructor: (mod.students / mod.instructors) }
    });

    

    // Annotation:
    // I need to return an array of objects where there is a key that is the mod and the value of that key is the number of students divided by the number of instructors.  I can probably use map since the array will be the same length as the original
  }
}






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    /* CODE GOES HERE */
    class Cake {
      constructor(flavor, inStock) {
        this.flavor = flavor;
        this.inStock = inStock;
      }
    }
    const cakeFlavors = 
    cakes.map(cake => {
      return new Cake(cake.cakeFlavor, cake.inStock);
    });
    return cakeFlavors

    // Annotation:
    // I want to look the cakes but only return the flavor property of the cake and how much is in stock.
    //the property in the return for flavor is different than the property name int he array
    //i will want to return a new array with new object in it...will probably use map for this
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
   
    const cakesInStock = cakes.filter (cakes => {
      return cakes.inStock > 0
    })
    return cakesInStock;

    

    // Annotation:
    // I want to filter through the array and only return the cakes that are in stock....
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const totalCakeInventory = cakes.reduce((sum, cake) => {
      return sum + cake.inStock
    },0);
    return totalCakeInventory;

    // Annotation:
    // I want to return the total number of all of the cakes.  I think I want to use reduce for this
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const getToppings = cakes.map(cake => {
      return cake.toppings
    });
    
    combineToppings = getToppings[0].concat(getToppings[1], getToppings[2], getToppings[3], getToppings[4], getToppings[5]);

    uniqueToppingsArray = [];

    const uniqueToppings = combineToppings.forEach(topping => {
      if(!uniqueToppingsArray.includes(topping)) {
        uniqueToppingsArray.push(topping);
      }
    });

    return uniqueToppingsArray;

    // Annotation:
    // I want to return a new array of all unique toppings that from every cake in the data set.
    // I also want to make sure there are no duplicates in the list
    // I probably want to use map to isolate all of the toppings and then use includes to prevent adding a topping twice
    // Now that all of the elements are in the array...I want to remove any duplicates.  Will need to use splice combined with another iterator
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,ç
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }
    // const uniqueToppingsObject = ({...uniqueToppings})
    // console.log(uniqueToppingsObject);

    let cakeToppings =[];
    
    const myList = cakes.forEach((cake) => {
      cake.toppings.forEach((topping) => {
        cakeToppings.push(topping);
      })
    });

    const toppingsList = cakeToppings.reduce((acc, topping) => {
      if (acc[topping]) {
        acc[topping] ++
      } else {
        acc[topping] = 1;
      }
      return acc
    }, {})

    return toppingsList;
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const frontEndClassRooms = classrooms.filter(classroom => {
      return classroom.program === 'FE'
    });

    return frontEndClassRooms;

  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    //
      const capacities = classrooms.reduce((acc, classroom) => { 
        if (classroom.program === 'FE') {
        acc.feCapacity += classroom.capacity   
      } else if (classroom.program === 'BE') {
        acc.beCapacity += classroom.capacity
      }
        return acc
      }, {feCapacity: 0, beCapacity: 0});
      return capacities;

      // let frontEndCapacity = 0
      // let backEndCapacity = 0

      // const capacities = classrooms.forEach(classroom => {
      //   if (classroom.program === 'FE') {
      //     feCapacites += classroom.capacity
      //   } else if (classroom.program === 'BE') {
      //     beCapacites += classroom.capacity
      //   }
      // });

    



    // Annotation:
    // I will use reduce to return a single object...I also need to combine the total capacities of each FE and BE program.  The object wants to have two keys with the names 'feCapacity' and 'beCapacity'
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    /* CODE GOES HERE */

    const sortedClassrooms = classrooms.sort((a, b) => {
      return a.capacity - b.capacity     
    });
    return sortedClassrooms;

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence(books) {
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:

    const nonHorrorBooks = books.filter(book => {
      return book.genre !== 'Horror'
    });

    const nonTrueCrimeBooks = nonHorrorBooks.filter (book => {
      return book.genre !== 'True Crime'
    })

    const nonViolentTitles = nonTrueCrimeBooks.map(book => {
      return book.title
    });

    return nonViolentTitles;
    
    // Annotation:
    // I will probably want to use the filter method and find all the books that are NOT horror or true crime.  I will return this array.  This function takes a parameter which will be the array of all the books.

  },
  getNewBooks(books) {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    const booksAfter90 = books.filter(book => {
      return book.published > 1990;
    });
    
    const newBooksTitles = booksAfter90.reduce((acc, book) => {
      acc.push({title: book.title, year: book.published})
      return acc
    }, []);
    return newBooksTitles;
    

    // Annotation:
    // I want to return an array of objects.  This array will contain objects with a key that is the 'title' of the book and the 'year' the book was published.  I will probably first need to filter out the books before 1990 and then use reduce to create the array of new objects.
  },

  getBooksByYear(books, year) {
    // return an array of objects containing all books that were
    // published after the specified year without the author or genre data. 
    // The published property should be changed to year for the returned books.
    // e.g. given 1990, return

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const booksAfterYear = books.filter(book => {
      return book.published > year
    })

    const bookTitlesYear = booksAfterYear.reduce((acc, book) => {
      acc.push({title: book.title, year: book.published})
      return acc
    }, []);
    return bookTitlesYear;


    // Annotation:
    // I want to return and array of objcts where each object has 2 keys the is the 'title' of the book and the 'year' the book was published.  This function takes in 2 arguments which is the array of books and a year.  I want to only return books published after the year that is passed into the function.  I will probably first want to use the filter method to get the books published after the given year and then use reduce to put those books into an array
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:

    return weather.map(info => (info.temperature.high + info.temperature.low) / 2)

    // Annotation:
    // I need to get the average of the high and low temperature from each location and store all of of the averages in an array.  The new array should be the same length as the original array so I could use map
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    return weather.reduce((acc, place) => {
      if (place.type === 'sunny' || place.type === 'mostly sunny') {
        acc.push(`${place.location} is ${place.type}.`);
      } 
      return acc
    }, [])

    // Annotation:
    // I need to return an array of strings that include information from locations that have a type property of 'sunny' or 'mostly sunny'.  The location should be included in the string as well as the type.
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    const sortedLocations = weather.sort((a, b) => {
      return b.humidity - a.humidity;
    })

    return sortedLocations[0];

    // Annotation:
    // I need to sort the locations by humidity from highest to lowest and return the first location 
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    return nationalParks.reduce((obj, park) => { 

       park.visited === true ? obj.parksVisited.push(park.name) : obj.parksToVisit.push(park.name);

       return obj

    }, {parksToVisit: [], parksVisited: []});


    // Annotation:
    // I can use reduce to return an object.  I can probably declare the properties in the accumulator in the setup of reduce.  I can then push the parks to their corresponding arrays
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


    return nationalParks.map(park => {
      return { [park.location]: park.name }
    })

    // Annotation:
    // I need to return an array of objects.  Each object will have one property with the key of the park location and the value of the name of that park.  I can probably use map for this since there are not multiple national parks in each state in this data set
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:

    const allActivites = [];

    const getActivites = nationalParks.forEach(park => {
      park.activities.forEach(activity => {
       if (!allActivites.includes(activity)) {
        allActivites.push(activity);
       }
      }) 
    })

    return allActivites;

    // Annotation:
    // I want array that combines all of the arrays of the national park activites into one array.  I can probably chain two for Each statements to do this and push the results into a new array.
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40
    
    const totalBeers = breweries.reduce((acc, brewery) => {
      acc += brewery.beers.length
      return acc
    },0)
    return totalBeers;

  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const breweryBeerCount = breweries.reduce((acc, brewery) => {
      acc.push({name: brewery.name, beerCount: brewery.beers.length})
      return acc
    },[])
    
    return breweryBeerCount

    // Annotation:
    // I will return an array of objects.  I could do this with reduce again by returning an array.  I'll need to iterate through each brewery and each object will have 2 keys: The 'name' of the brewery and the 'beerCount" which holds the number of beers which can be found again using the length method
  },

  getSingleBreweryBeerCount(breweryName) {
    // Return a number that is the count of beers that the specified
    // brewery has e.g.
    // given 'Ratio Beerworks', return 5


    const findBreweryBeerCount = breweries.find(brewery => {
      return brewery.name === breweryName;
    })
    return findBreweryBeerCount.beers.length;

    // Annotation:
    // This function takes in a single argument which is the name of a brewery.  I want to iterate through the breweries and find the name of one brewery and return the beer number from that single brewery.  I can probably use the find method for this.
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    let allBeers = [];
    const getAllBeers = breweries.forEach(brewery => {
      brewery.beers.forEach(beer => {
        allBeers.push(beer);
      })
    });

    const boosiestBeer = allBeers.sort((a, b) => {
      return b.abv - a.abv;
    })
    return boosiestBeer[0]

    // Annotation:
    // I can probably sort the beers by ABV and then return the beer at the top or bottom of the list depending on how the list sorts (i.e. if the first beer has the highest abv, return the beer at the zero index and vice versa);
    //I will probably need to put all fo the beers in a list together first
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/boardGames

const boardGamePrompts = {
  listGames(type) {
    // Return an array of just the names of the games within a specified type. 
    // e.g. given an argument of "strategy", return
    // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]

    const gameTypes = []

    // const games = Object.keys(boardGames).forEach(gameType => { 
    //     console.log(gameType));
    //     })

    const sortGames = Object.entries(boardGames).forEach(game => {
      if (game[0] === type) {
        game[1].forEach(game => {
          gameTypes.push(game.name);
        })
      }
    })
    
    return gameTypes;
      
    // console.log(boardGames.strategy[0].name);

    // Annotation:
    // This function will take an argument which is a type of game.  I want to return an array that is only games that match the argument that is passed in.  I will only return the game names.  The data set is an object with keys that contain an array of objects.  So I will need to iterate over the array inside of each object.  Will probably need chained for Each for this.  BoardGames is an object with keys that hold an array of other objects.  
  },

  listGamesAlphabetically(type) {
    // Return an array of just the names of the games within a specified 
    // type, sorted alphabetically. 
    // e.g. given an argument of "childrens", return
    // ["Candy Land", "Connect Four", "Operation", "Trouble"]

    const games = this.listGames(type);
    return games.sort();

    // Annotation:
    // I should be able to use the same function as last time.  I just need to add an additional step which is to return the array with the games listed in alphabetical order.  Since the array will be the same length just ordered differently...I should be able to use sort or map
  },

  findHighestRatedGamesByType(type) {
    // Return an object which is the highest rated game within the specified type.
    // e.g. given the argument of 'party', return
    // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },
    const gamesByType = []

    const games = Object.entries(boardGames).forEach(game => {
      if (game[0] === type) {
        game[1].forEach(game => {
          gamesByType.push(game);
        })
      }
    })

    const gamesByRating = gamesByType.sort((a, b) => {
      return b.rating - a.rating;
    })

    return gamesByRating[0];
    

    // Annotation:
    // I should again be able to call the original function which finds game by type and then use the sort method and sort the games by rating.  I then want to return the whole object which has the higest rated game.  I could use sort and then return the first index from the sorted array.
  },

  averageScoreByType(type) {
    // Return the average score for the specified type.
    // e.g. given the argument of "strategy", return 7
    // note: do not worry about rounding your result.

    gamesByType = [];

    const games = Object.entries(boardGames).forEach(game => {
      if (game[0] === type) {
        game[1].forEach(game => {
          gamesByType.push(game);
        })
      }
    })

    const gameRatingSum = gamesByType.reduce((sum, game) => {
      sum += game.rating
      return sum
    }, 0)

    return gameRatingSum / gamesByType.length;

    // Annotation:
    // Can again use the modifed version of my original method to find games by type.  I then want to return the average score for that particular type of game. I'll ned to add all the ratings and divide by the length of the array.  Will probably want to use reduce for this.
  },

  averageScoreByTypeAndPlayers(type, maximumPlayers) {
    // Return the average score of any games that match the specified type
    // and maximum number of players.
    // e.g. given the arguments of "strategy" and 2, return 6.16666666667
    // note: do not worry about rounding your result.

    gamesByType = [];

    const games = Object.entries(boardGames).forEach(game => {
      if (game[0] === type) {
        game[1].forEach(game => {
          gamesByType.push(game);
        })
      }
    })

    const gamesByMaxPlayers = gamesByType.filter(game => {
      return game.maxPlayers === maximumPlayers
    })

    const gameRatingSum = gamesByMaxPlayers.reduce((sum, game) => {
      sum += game.rating
      return sum
    }, 0)

    return gameRatingSum / gamesByMaxPlayers.length



    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const instructorStudentRatio = () => {

      const allInstructors = [];
      // const mod2Instructors = [];
      // const mod3Instructors = [];
      // const mod4Instructors = [];

    //   const sortInstructors = instructors.forEach(instructor => {
    //     instructor.module === 1 ? mod1Instructors.push({name: instructor.name}) : instructor.module === 2 ? mod2Instructors.push({name: instructor.name}) : instructor.module === 3 ? mod3Instructors.push({name: instructor.name}) : mod4Instructors.push({name: instructor.name}) 
    //   })
    //   return mod2Instructors
    // } 

    const sortInstructors = instructors.forEach(instructor => {
      allInstructors.push({name: instructor.name, module: instructor.module})
    })
      const addStudentCount = cohorts.forEach(module => {
        
      })
    }

    console.log(instructorStudentRatio());
  

    

    // Annotation:
    // I need to iterate over the instructors array and create an array of objects where each object has two properties: the name of the instructor and the studentCount for their particular mod.  I could do this with map has the new array will have the same number of objects as the original.  I also need to iterate over the cohorts array and get the studentCount from each module.  This will be the studentCount property in the new array of objects.  I wonder if I can use reduce over two data sets simultaneously?
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the star objects that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' },
    //   {
    //     name: 'Achernar',
    //     visualMagnitude: 0.46,
    //     constellation: 'The Plow',
    //     lightYearsFromEarth: 140,
    //     color: 'blue'
    //   },
    //   {
    //     name: 'Hadar',
    //     visualMagnitude: 0.61,
    //     constellation: 'The Little Dipper',
    //     lightYearsFromEarth: 350,
    //     color: 'blue'
    //   }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Sort the stars by brightness and return an array of the star's constellation names
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
    // e.g.
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
  boardGamePrompts,
};
