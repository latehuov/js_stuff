
//  Pyramids.js  (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2018-09-24  File created. 

/*  This program demonstrates:
      - definition and calling of a function
      - using keyword let in place of var in for loops
*/

// Here we specify a function that will be called later.
// This function takes one parameter (argument)
// The internal statements of the function will be executed only 
// when it is called.

function print_pyramid( desired_number_of_levels, default_pyramid_character = '=' )
{
   if ( desired_number_of_levels > 2 && desired_number_of_levels < 21 )
   {
      for ( let level_counter = 1 ;
                level_counter <= desired_number_of_levels ;
                level_counter ++ )
      {
         process.stdout.write( "\n" ) ;  // New line for new level

         // We'll print space characters so that the top of the pyramid will be
         // close to the character position 40.

         for ( let space_counter = 0 ;
                   space_counter < 40 - level_counter ;
                   space_counter ++ )
         {
            process.stdout.write( " " ) ; // print a single space character
         }

         // The body of the pyramid will consist of double characters "=="

         for ( let double_character_counter = 0 ;
                   double_character_counter < level_counter ;
                   double_character_counter ++ )
         {
             // print double character
            process.stdout.write(default_pyramid_character)
            process.stdout.write(default_pyramid_character)
         }
      }
   }
   else
   {
      process.stdout.write( "\n  Number of pyramid levels not acceptable. \n" ) ;
   }

   process.stdout.write( "\n" ) ;
}
function print_inverted_pyramid( desired_number_of_levels, default_pyramid_character = '=' )
{
   if ( desired_number_of_levels > 2 && desired_number_of_levels < 21 )
   {
      for ( let level_counter = desired_number_of_levels ;
                level_counter >= 1 ;
                level_counter -- )
      {
         process.stdout.write( "\n" ) ;  // New line for new level

         // We'll print space characters so that the top of the pyramid will be
         // close to the character position 40.

         for ( let space_counter = 0 ;
                   space_counter < 40 - level_counter ;
                   space_counter ++ )
         {
            process.stdout.write( " " ) ; // print a single space character
         }

         // The body of the pyramid will consist of double characters "=="

         for ( let double_character_counter = 0 ;
                   double_character_counter < level_counter ;
                   double_character_counter ++ )
         {
             // print double character
            process.stdout.write(default_pyramid_character)
            process.stdout.write(default_pyramid_character)
         }
      }
   }
   else
   {
      process.stdout.write( "\n  Number of pyramid levels not acceptable. \n" ) ;
   }

   process.stdout.write( "\n" ) ;
}
function print_hollow_pyramid( desired_number_of_levels, default_pyramid_character = '=' )
{
   if ( desired_number_of_levels > 2 && desired_number_of_levels < 21 )
   {
      for ( let level_counter = 1 ;
                level_counter <= desired_number_of_levels ;
                level_counter ++ )
      {
         process.stdout.write( "\n" ) ;  // New line for new level

         // We'll print space characters so that the top of the pyramid will be
         // close to the character position 40.

         for ( let space_counter = 0 ;
                   space_counter < 40 - level_counter ;
                   space_counter ++ )
         {
            process.stdout.write( " " ) ; // print a single space character
         }

         // The body of the pyramid will consist of double characters "=="

         for ( let double_character_counter = 0 ;
                   double_character_counter < level_counter ;
                   double_character_counter ++ )
         {
             // print double character
            if (level_counter < desired_number_of_levels)
            {
               if (double_character_counter > 0 && double_character_counter + 1 < level_counter)
               {
                  process.stdout.write("XX")
               }
            
               else
               {    
                  process.stdout.write("==")
               }
            }
            else
            {
               process.stdout.write("==")
            }
         }

      }
   }
   else
   {
      process.stdout.write( "\n  Number of pyramid levels not acceptable. \n" ) ;
   }

   process.stdout.write( "\n" ) ;
}
// Here is the 'main' program, which consists of calls
// to the above function.

print_inverted_pyramid( 20, 'u' ) ;  // print a pyramid with 18 levels
print_hollow_pyramid( 8, 'p' ) ;  // print a smaller pyramid

