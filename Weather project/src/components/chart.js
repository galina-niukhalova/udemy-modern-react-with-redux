import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    if (data.length === 0) return 0;

    // return data.reduce((cur, prev) => cur + prev, 0) / data.length;
    return _.round(_.sum(data) / data.length);
}
    
export default (props) => {
    return (
        <div>
            <Sparklines data={props.data} width={180} height={120}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data) + ' ' + props.units}</div>
        </div>
    );

} 