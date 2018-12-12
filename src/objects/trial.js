class Trial
{
  constructor ( name, struct, type )
  {
    this.name = name;
    this.operate = ( ) => { console.log( 'hello' ); }
    
    this.begin = null;
    this.end = null;
    this.delta = null;

    this.data = [ ];

    this.mean = 0;
    
    if ( type === 'class' )
    {
      this.struct = new struct( );
      this.operate = ( ) => { this.struct.operate( ); }
    }
    else if ( type === 'object' )
    {
      this.struct = struct.create( );
      this.operate = ( ) => { struct.operate( this.struct ); }
    }
    else if ( type === 'array' )
    {
      this.struct = struct.create( );
      this.operate = ( ) => { struct.operate( this.struct ); }
    }
  }
}

export default Trial;