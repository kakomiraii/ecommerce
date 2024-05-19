This is my shopping cart assignment.

To run this project:

-Open up terminal

-git clone 'repository'

-cd ecommerce

-cd shopping-cart

-npm start 


Considerations:

#1 Initially, I used React context and hooks to state manage '
as this project has fewer states and components however,
I switched to using Redux as Redux works well with complex
state changes and can prevent bugs and inconsistent states 
which would be what's best for actual projects/builds. 

#2 Initially, I used axios to fetch from "fakestoreapi.com" 
but as I switched to using Redux, I also used RTK query instead.
Writing data fetching code manually is not optimal since 
there are many edge cases to consider, using RTK query with Redux 
eliminates needing to write multiple axios function which is unrealistic.

#3 As I was used to writing mostly plain vanilla css, using 
tailwindcss was very eyeopening. Tailwindcss is definitely
far speedier in development and there is no need to upkeep
a huge css file as well so I will be experimenting more of it 
in my future builds. :) 
