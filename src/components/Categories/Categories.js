
import React from 'react';
import { connect } from 'react-redux';
import { activeCategory } from '../../store/Action';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';


function Categories(props) {
 
    return (
        <>
            <h3>
                
                Browse our Categories 
            </h3>
            {props.categories.map(category => {
                return (
                    <ButtonBase
                        key={category.name}
                        onClick={() => props.activeCategory(category.name)}
                        style={{ marginLeft: '30px' }}
                    >
        
                        <Typography>{category.displayName}</Typography>

                    </ButtonBase>
                );
            })}

        </>
    );
}



const mapStateToProps = (state) => {
    
    return { categories: state.categories.categories};

}
const mapDispatchToProps = { activeCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);