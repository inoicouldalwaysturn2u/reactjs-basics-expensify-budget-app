const promise = new Promise( ( resolve, reject ) => {
  setTimeout( () => {
    // resolve( {
    //   name: 'Moi',
    //   age: 28
    // } );
    reject( 'Something went wrong' );
  }, 2500 );
} );

console.log( 'before' );

promise.then( ( data ) => { 
  console.log( '1', data );
} ).catch( ( err ) => { 
  console.log( 'err: ', err );
} );

promise.then( ( data ) => { 
  console.log( '2', data );
} );

console.log( 'after' );
