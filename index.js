// create a array of movies objects
var myMovies = [
  {
    name: "Shawshank Redumption",
    year: "1994",
    director: "Frank Darabont",
    picture: "movie1.jpg",
  },
  {
    name: "Man In Black",
    year: "2005",
    director: "Blaah Blaah",
    picture: "movie2.jpg",
  },
  {
    name: "Spiderman",
    year: "1998",
    director: "Blaah Blaah",
    picture: "movie3.jpg",
  },
  {
    name: "Billy Madison",
    year: "1995",
    director: "Tamra Davis",
    picture: "movie4.jpg",
  },
  {
    name: "Rounders",
    year: "1998",
    director: "John Dahl",
    picture: "movie5.jpg",
  },
];

// create array of <li> items 
var list_items = myMovies.map((movie) => {
  var item = `<li>Name: ${movie["name"]}<br>
                  Year: ${movie["year"]}<br>
                  Name: ${movie["director"]}<br>
                  <img src="${movie["picture"]}"/><br>
              </li><br>`;
  return item;
});

// append all the <li> items in a string variable called 'content'
var content = "";
list_items.forEach((item) => {
  content += item;
});

// get the ol element from html and set the content
document.getElementById("mylist").innerHTML = content;