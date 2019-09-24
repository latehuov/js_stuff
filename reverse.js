
//  Reverse.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-19 File created.   2017-08-14 Last modification.

var given_numbers = [] ;
var random_numbers  =  [] ;
var result = 0;
for (let number_counter = 0; number_counter < 7 ; random_numbers.sort(function(a, b) {return a-b}))
{
  let generated = Math.floor(Math.random()* 14 + 1)
  if (random_numbers.includes(generated))
  {
     continue;
  }
  else
  {
  random_numbers.push(generated)
  number_counter ++
  }
}
//for ( let number_index  =  0 ; number_index  <  random_numbers.length ; number_index  ++ )
            //{
            //process.stdout.write( "  "  +  random_numbers[ number_index ] ) ;
            //}
process.stdout.write( "\n This program reads numbers from the keyboard."
                   +  "\n After receiving a zero, it prints the numbers"
                   +  "\n in reverse order. Please, start entering numbers."
                   +  "\n The program will stop when you enter a zero.\n\n" ) ;

process.stdout.write( "   "  +  given_numbers.length 
                   +  "  Enter a number: ") ;

process.stdin.on( "data", function( input_from_user )
{
   // This function will be executed always after
   // the user has typed in a number.

   var number_from_keyboard = Number( input_from_user ) ;
   if (input_from_user == 0)
      {
         process.stdout.write("   bye bye!")
         process.exit();
      }
   if (given_numbers.includes(number_from_keyboard))
   {
      process.stdout.write(" please type in a number between 1 and 14 that you haven't typed before! \n   "
                  + given_numbers.length + "  Enter a number: ")
   }
   else
   { 
      if (number_from_keyboard <= 14) {
         given_numbers.push( number_from_keyboard ) ;
   
         if ( number_from_keyboard == 0 || given_numbers.length == 7 )
         {
            process.stdout.write( "\n your numbers are:  " ) ;
            var number_index = 0 ;
            while (number_index < 7)
            {
               process.stdout.write( given_numbers[ number_index ] + "   " ) ;
               number_index ++ ;
            }
            process.stdout.write("\n Winning numbers are: ")
            for ( let number_index  =  0 ; number_index  <  random_numbers.length ; number_index  ++ )
            {
            process.stdout.write( "  "  +  random_numbers[ number_index ] ) ;
            }
            for(let i = 0; i < given_numbers.length; i++)
               {      
                  if ( random_numbers.includes(given_numbers[i]) )
                  {
                     result ++
                  }
               }
            if (result == 0)
            {
               process.stdout.write("\n better luck next time!")
            }     
            else
            {
               process.stdout.write("\n Congratulations!     " + result + " correct guesses.")
            }
               process.stdout.write( "\n\n" ) ;

               process.exit() ;  // This terminates the program.
         }
         else
         {
      // We are not finished. Let's ask for one more number.
      // The length property tells how many elements the array has,
      // i.e. how many numbers have been entered.

         process.stdout.write( "   "  +  given_numbers.length 
                              +  "  Enter a number: ") ;
         }
      }  
      else 
      {
      process.stdout.write( "   please enter a number between 1 and 40 \n   "  +  given_numbers.length 
                           +  "  Enter a number: ") ;
      }
   }
} ) ;

