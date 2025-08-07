import { Link } from 'react-router-dom'

export const TeamsColumns = [
    {
        Header: 'Position',
        Footer: 'Position',
        accessor: 'position',
        //Filter: ColumnFilter
    },
    {
        Header: 'Name',
        Footer: 'Name',
        accessor: 'name',
        Cell: ({row}) => (
            <Link to={`/LeagueManagerSimulator/Teams/${row.original.name}`}> {row.original.name}</Link>
        ),
        //Filter: ColumnFilter,
        disableFilters: false
    },
    {
        Header: 'Region',
        Footer: 'Region',
        accessor: 'region',
    },
    {
        Header: 'Wins',
        Footer: 'Wins', 
        accessor: 'wins',
    },
    {
        Header: 'Losses',
        Footer: 'Losses',
        accessor: 'losses',
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
        Header: 'Streak',
        Footer: 'Streak',
        accessor: 'streak',
        Cell: ({value}) => {return `${value}W`},
        //Filter: ColumnFilter
    },
]

