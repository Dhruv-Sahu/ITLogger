import React from 'react';
import PropTypes from 'prop-types';
import TechListModal from './TechListModal';

const TechItem = ({tech}) => {
    return (
        <li className='collection-item'>
            <div>
                {tech.firstName}{tech.lastName}
                <a href="#!" className='secondary-content'>
                    <i className='material-icons grey-text'>delete</i>
                </a>
            </div>
        </li>
    )
}

TechItem.propTypes ={
    tech: PropTypes.object.isRequired,
} 

export default TechItem
