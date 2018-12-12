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

  trials.push( ...[
    new SPT.Trial( 'class', SPT.StructClass, 'class' ),
    new SPT.Trial( 'object', SPT.StructObject, 'object' ),
    new SPT.Trial( 'array', SPT.StructArray, 'array' )
  ] );

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
}

if ( instanceType === 'node' )
{ init( ); }