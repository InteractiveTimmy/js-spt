class StructClass
{
  constructor ( )
  {
    this.data = new Float32Array( [
      Math.random( ),
      Math.random( ),
      Math.random( )
    ] );
  }

  operate ( )
  {
    this.data[0] = Math.random( ),
    this.data[1] = Math.random( ),
    this.data[2] = Math.random( );
  }
}

const StructObject = {
  create: ( ) => {
    return {
      data: new Float32Array( [
        Math.random( ),
        Math.random( ),
        Math.random( )
      ] )
    };
  },
  operate: ( struct ) => {
    struct.data[0] = Math.random( );
    struct.data[1] = Math.random( );
    struct.data[2] = Math.random( );  
  }
};

const StructArray = {
  create: ( ) => {
    return new Float32Array( [
      Math.random( ),
      Math.random( ),
      Math.random( )
    ] );
  },
  operate: ( struct ) => {
    struct[0] = Math.random( );
    struct[1] = Math.random( );
    struct[2] = Math.random( );  
  }
};

class Trial
{
  constructor ( name, struct, type )
  {
    this.name = name;
    this.operate = ( ) => { console.log( 'hello' ); };
    
    this.begin = null;
    this.end = null;
    this.delta = null;

    this.data = [ ];

    this.mean = 0;
    
    if ( type === 'class' )
    {
      this.struct = new struct( );
      this.operate = ( ) => { this.struct.operate( ); };
    }
    else if ( type === 'object' )
    {
      this.struct = struct.create( );
      this.operate = ( ) => { struct.operate( this.struct ); };
    }
    else if ( type === 'array' )
    {
      this.struct = struct.create( );
      this.operate = ( ) => { struct.operate( this.struct ); };
    }
  }
}

class Target
{
  constructor ( )
  {

  }
}

export { StructClass, StructObject, StructArray, Trial, Target };
