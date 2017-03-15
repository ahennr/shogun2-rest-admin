import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';
import { crudGetMany as crudGetManyAction } from 'admin-on-rest';

/**
 * Render records specified by an array of ids in current one.
 *
 * You must define the fields to be passed to the iterator component as children.
 *
 * @example Display all the products of the current order as datagrid
 * <ReferenceArrayField label="Products" reference="products" source="product_ids">
 *     <Datagrid>
 *         <TextField source="id" />
 *         <TextField source="description" />
 *         <NumberField source="price" options={{ style: 'currency', currency: 'USD' }} />
 *         <EditButton />
 *     </Datagrid>
 * </ReferenceArrayField>
 *
 * @example Display all the categories of the current product as a list of chips
 * <ReferenceArrayField label="Categories" reference="categories" source="category_ids">
 *     <SingleFieldList>
 *         <ChipField source="name" />
 *     </SingleFieldList>
 * </ReferenceArrayField>
 *
 */
class ReferenceArrayField extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { crudGetMany, reference, ids } = this.props;
        crudGetMany(reference, ids);
    }

    render() {
        const { data, ids, children, resource, reference, basePath } = this.props;
        if (React.Children.count(children) !== 1) {
            throw new Error('<ReferenceArrayField> only accepts a single child (like <Datagrid>)');
        }
        if (typeof ids === 'undefined') {
            return <LinearProgress style={{ marginTop: '1em' }} />;
        }

        const referenceBasePath = basePath.replace(resource, reference); // FIXME obviously very weak
        return React.cloneElement(children, {
            resource: reference,
            ids,
            data,
            basePath: referenceBasePath
        });
    }
}
ReferenceArrayField.propTypes = {
    addLabel: PropTypes.bool,
    basePath: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    crudGetMany: PropTypes.func.isRequired,
    ids: PropTypes.array,
    label: PropTypes.string,
    record: PropTypes.object,
    reference: PropTypes.string.isRequired,
    data: PropTypes.object,
    resource: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => {
    const { record, source, reference } = props;
    const ids = record[source];
    return {
        ids,
        data: ids
            .map(id => state.admin[reference].data[id])
            .filter(r => typeof r !== 'undefined')
            .reduce((prev, next) => {
                prev[next.id] = next;
                return prev;
            }, {}),
    };
};

const ConnectedReferenceArrayField = connect(mapStateToProps, {
    crudGetMany: crudGetManyAction,
})(ReferenceArrayField);

ConnectedReferenceArrayField.defaultProps = {
    addLabel: true,
    source: '',
};

export default ConnectedReferenceArrayField;
