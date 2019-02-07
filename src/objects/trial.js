class Trial
{
  constructor ( name, struct, type )
  {
    this.name = name;
    this.type = type;
    
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
    else
    {
      this.struct = null;
      this.operate = ( ) => { };
    }
  }
}

export default Trial;