//import ColumnFilter from './ColumnFilter'

export const PlayerColumns = [
    {
        Header: 'Name',
        Footer: 'Name',
        accessor: 'name',
        //Filter: ColumnFilter,
        disableFilters: false
    },
    {
        Header: 'Region',
        Footer: 'Region',
        accessor: 'region',
    },
    {
        Header: 'Role',
        Footer: 'Role', 
        accessor: 'role',
    },
    {
        Header: 'Age',
        Footer: 'Age',
        accessor: 'age',
        //Filter: ColumnFilter
        //Cell: ({value}) => {return (24-value)} //reformatting data
    },
    {
        Header: 'OVR',
        Footer: 'OVR',
        accessor: 'OVR',
        //Filter: ColumnFilter
    },
    {
        Header: 'POT',
        Footer: 'POT',
        accessor: 'POT',
        //Filter: ColumnFilter
    },
    {
        Header: 'Asking For',
        Footer: 'Asking For',
        accessor: 'askingFor',
        Cell: ({value}) => {return `$${value}K`},
        //Filter: ColumnFilter
    },
    {
        Header: 'KDA',
        Footer: 'KDA',
        accessor: 'KDA',
        Cell: ({value}) => {return `${value.toFixed(2)}`},
        //Filter: ColumnFilter
    },
]

/* export const GROUPED_COLUMNS = [ 
    {
        Header: 'Stats',
        Footer: 'Stats',
        columns: [
            {
                Header: 'OVR',
                Footer: 'OVR',
                accessor: 'OVR'
            },
            {
                Header: 'POT',
                Footer: 'POT',
                accessor: 'POT'
            }
        ]
    }, 
    {
        Header: 'Info',
        Footer: 'Info',
        columns: [
            {
                Header: 'Name',
                Footer: 'Name',
                accessor: 'name'
            },
            {
                Header: 'Age',
                Footer: 'Age',
                accessor: 'age'
            }
        ]
    }

] */