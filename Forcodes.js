
//  Forcodes.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-12-02 File created.   2016-12-02 Last modification.

process.stdout.write( "\n The visible characters with codes from 20"
                   +  "\n to 7F (hexadecimal) are the following:\n\n   " ) ;

var number_of_codes_on_current_line = 0 ;

for ( let numerical_code  =  0x20 ;
          numerical_code  <  0x80 ;
          numerical_code  ++ )
{
   let character_to_print  =  String.fromCharCode( numerical_code )  ;

   process.stdout.write( character_to_print  +  " " ) ;
   process.stdout.write( numerical_code.toString( 16 ) + "  " ) ;

   number_of_codes_on_current_line  ++  ;

   if (  number_of_codes_on_current_line  ==  8  )
   {
      process.stdout.write( "\n   " ) ;
      number_of_codes_on_current_line   =  0 ;
   }
}

process.stdout.write( "\n\n" ) ;



