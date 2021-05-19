import SourceListData from './SourceListData.js';

const SourceList = (props) => {
    if (props.sourceData == undefined) {
        return '';
    }

    return props.sourceData.map((el, index) => {
        return <SourceListData key={index} title={el.title} />
    });
}

export default SourceList;
