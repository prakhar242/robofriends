import React from 'react';

const searchbox = ({searchfield, searchChange}) =>{
return (
	<div className ='pa2 tc'>
<input className = 'pa3 tc ba b--green bg-lightest-blue'
type ='search'
placeholder ='Search' 
onChange = {searchChange}
/>
</div>
)
}
export default searchbox;