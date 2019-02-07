importScripts( 'spt.js' );
importScripts( 'index.js' );

onmessage = ( e ) => {
  const { operations, trials, iterations } = e.data;

  init( operations, trials, iterations )
    .then( ( r ) => {
      return run( r.controls, r.trials )
    } )
    .then( ( r ) => {
      postMessage( r );
    } );
};