
//  Widename.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-12-02 File created.   2016-12-02 Last modification.

/*  In this program characters of a string are accessed with
    an index value inside brackets [ ]. Another possibility would
    be to use the charAt() method.
   */
 const  array_of_morse_codes  =

 [ "A", ".-",   "B", "-...", "C", "-.-.", "D", "-..", "E", ".",
   "F", "..-.", "G", " --.", "H", "....", "I", "..",  "J", ".---",
   "K", "-.-",  "L", ".-..", "M", "--",   "N", "-.",  "O", "---",
   "P", ".--.", "Q", "--.-", "R", ".-.",  "S", "...", "T", "-",   
   "U", "..-",  "V", "...-", "W", ".--",  "X", "-..-","Y", " -.--", 
   "Z", "--..", "1", ".----","2", "..---","3", "...--","4","....-",
   "5", ".....","6", "-....","7", "--...","8", "---..","9","----.",
   "0", "-----"," ", "     "  ] ;


process.stdout.write( "\n Please, type in your name: " ) ;

process.stdin.on( "data", function( input_from_user )
{
   // When we take the string from the user input, we need to
   // use the trim() method to get rid of line termination characters.
   
   var name_from_keyboard = input_from_user.toString().trim() ;

   process.stdout.write( "\n Here is your name in a wider form: \n\n  " ) ;

   // In the following loops, character_index gets values
   // 0, 1, 2, ... until the last possible index value.

   for ( let character_index  in  name_from_keyboard )
   {
      process.stdout.write( " "  +   name_from_keyboard[ character_index ] ) ;
   }

   process.stdout.write( "\n\n The characters as hexadecimal codes: \n\n  " ) ;

   for ( let character_index  in  name_from_keyboard )
   {
      // String method charCodeAt() returns the numerical Unicode.

      var character_code = name_from_keyboard.charCodeAt( character_index ) ;

      // Value 16 specifies that toString() must return a hexadecimal string.

      process.stdout.write(  " "  +  character_code.toString( 16 ) ) ;
   }

   process.stdout.write( "\n\n The length of your name is " + name_from_keyboard.length) ;
   process.stdout.write("\n Your name in reverse is : " + name_from_keyboard.split("").reverse().join("")) // splits name in to array, reverses array, makes array into string

   var upper = name_from_keyboard.toUpperCase()
   for (let pos = 0; pos < name_from_keyboard.length; pos ++) //determine letter in string
   {
      let morseName = array_of_morse_codes.indexOf(upper[pos]) // checks if upper in  position pos belongs to morse array
         if (morseName != -1) //checks if char in upper is a letter/number in morse array
            {
               console.log("\n " + array_of_morse_codes[morseName + 1]) // adds one to position and prints
            }
   }
   process.stdout.write("your name written in random order five times is : \n\n")
   for (let i = 0; i < 5; i ++)
   {
      console.log(name_from_keyboard.split("").sort(function(a,b){return(0.5 - Math.random())}).join("")) //turn string into array, sort array in random order, turn array into string
   }
   process.exit() ;
} ) ;