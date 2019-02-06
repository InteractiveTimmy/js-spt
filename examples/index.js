'use strict';

let SPT;
let instanceType;
let target;

try
{
  SPT = window.SPT;
  instanceType = 'browser';
}
catch
{
  SPT = require( '../build/spt.js' );
  instanceType = 'node'
}

console.log( `${instanceType} instance detected` );

let controls = { };
let trials = [ ];

function init ( )
{
  controls.operations = 1000000;
  controls.trials = 50;

  let types = [
    [ 'class', SPT.StructClass, 'class' ],
    [ 'object', SPT.StructObject, 'object' ],
    [ 'array', SPT.StructArray, 'array' ]
  ];

  let index;

  for ( let i = 0; i < 100; i++ )
  {
    index = Math.floor( Math.random( ) * 3 );
    trials.push( new SPT.Trial( ...types[index] ) );
  }

  /*
  trials.push( ...[
    new SPT.Trial( 'class', SPT.StructClass, 'class' ),
    new SPT.Trial( 'object', SPT.StructObject, 'object' ),
    new SPT.Trial( 'array', SPT.StructArray, 'array' )
  ] );
  */

  start( );
}

function start ( )
{
  trials.forEach( trial => {
    for ( let x = 0; x < controls.trials; x++ )
    {
      trial.begin = Date.now( );

      for ( let y = 0; y < controls.operations; y++ )
      { trial.operate( ); }

      trial.end = Date.now( );
      trial.delta = trial.end - trial.begin;

      trial.data.push( trial.delta );
    }

    trial.data.forEach( item => {
      trial.mean += item;
    } );

    trial.mean /= trial.data.length;

    console.log( `${trial.name} had an average trial delta of ${trial.mean}ms` );
  } );

  let results = { };

  trials.forEach( trial => {
    if ( !results[trial.name] )
    {
      results[trial.name] = {
        total: 0,
        count: 0
      };
    }

    results[trial.name].total += trial.mean;
    results[trial.name].count++;
  } );

  Object.keys( results ).forEach( item => {
    console.log( `final results for ${item} had an average delta of ${results[item].total / results[item].count}ms` );
  } );
}

if ( instanceType === 'node' )
{ init( ); }