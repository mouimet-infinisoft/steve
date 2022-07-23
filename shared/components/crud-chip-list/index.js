import React from 'react'
import Inside from './inside'
import Below from './below'
import NoTag from './notag'

const variants = {
    inside: Inside,
    below: Below,
    notag: NoTag
}

const CrudChipList = ({variant, ...props}) => React.createElement(variants[variant], props);

export default CrudChipList