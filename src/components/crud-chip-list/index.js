import React from 'react'
import Inside from './inside'
import Below from './below'

const variants = {
    inside: Inside,
    below: Below
}

const CrudChipList = ({variant, ...props}) => React.createElement(variants[variant], props);

export default CrudChipList