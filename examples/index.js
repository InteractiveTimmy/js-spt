'use strict';

let mySPT;
let instanceType;

try { mySPT = window.SPT; instanceType = 'browser'; }
catch { }

try { mySPT = require( './spt.js' ); instanceType = 'node'; }
catch { }

try { importScripts( 'spt.js' ); mySPT = SPT; instanceType = 'webworker';  }
catch { }

function init ( operations, trialCount, iterations )
{ return new Promise( ( resolve, reject ) => {
  const controls = {
    operations: operations,
    trials: trialCount,
    iterations: iterations
  };

  const trials = [ ];

  const types = [
    [ mySPT.StructClass, 'class' ],
    [ mySPT.StructObject, 'object' ],
    [ mySPT.StructArray, 'array' ]
  ];

  let index;

  for ( let i = 0; i < iterations + 1; i++ )
  {
    index = Math.floor( Math.random( ) * 3 );
    trials.push( new mySPT.Trial( `trial ${i}`, types[index][0], types[index][1] ) );
  }

  resolve( { controls: controls, trials: trials } )
} ); }

function run ( controls, trials, step )
{ return new Promise( ( resolve, reject ) => {
  
  trials.forEach( ( trial, i ) => {
    for ( let x = 0; x < controls.trials; x++ )
    {
      trial.begin = Date.now( );

      for ( let y = 0; y < controls.operations; y++ )
      { trial.operate( ); }

      trial.end = Date.now( );
      trial.delta = trial.end - trial.begin;

      trial.data.push( trial.delta );
    }

    trial.data.forEach( ( delta, i ) => {
      trial.mean += delta;
    } );

    trial.mean /= trial.data.length;

    if ( i !== 0 && step instanceof Function ) { step( trial ); }
  } );

  let results = { };

  trials.forEach( ( trial, i ) => {
    if ( !results[trial.type] )
    {
      results[trial.type] = {
        total: 0,
        count: 0
      };
    }

    if ( i !== 0 )
    {
      results[trial.type].total += trial.mean;
      results[trial.type].count++;
    }
  } );

  resolve( results );
} ); }

if ( instanceType == 'node' )
{
  let begin, end, delta;

  init( 1000000, 20, 100 )
    .then( ( r ) => {
      begin = Date.now( );
      return run( r.controls, r.trials, ( trial ) => {
        console.log( `${trial.name} - ${trial.type} completed a trial with a delta time of ${trial.mean}ms` );
      } );
    } )
    .then( ( r ) => {
      end = date.now( );
      delta = end - begin;
      console.log( `total process time - ${delta}ms` );
      Object.keys( r ).forEach( ( key, i ) => {
        console.log( `${key} performed ${r[key].count} trial[s] with an average delta time of ${r[key].total / r[key].count}ms` );
      } );
    } );
}