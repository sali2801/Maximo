import React, { useEffect } from 'react';
import {
  Information20,
  Star20,
  Edit20,
  Share20,
  OverflowMenuVertical20,
  Search16,
  Edit16,
  Settings16,
} from '@carbon/icons-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableToolbar,
  TableToolbarContent,
  TableToolbarAction,
} from 'carbon-components-react';
import { SimpleBarChart } from '@carbon/charts-react';
import { ScaleTypes } from '@carbon/charts/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { selectMockData } from '../../redux/selector';
import { ApplicationActionType } from '../../redux/types';

const LandingPage = () => {
  const dispatch = useDispatch();

  const mockData = useSelector(selectMockData);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/sali2801/mockDataServer/sales')
      .then((response) => response.json())
      .then((sales) => {
        dispatch({ type: ApplicationActionType.SetMockData, payload: sales });
      });
  }, []);

  const headers = [
    {
      key: 'month',
      header: 'Month',
    },
    {
      key: 'quantity',
      header: 'Quantity',
    },
    {
      // `key` is the name of the field on the row object itself for the header
      key: 'notes',
      // `header` will be the name you want rendered in the Table Header
      header: 'Notes',
    },
  ];

  const options = {
    data: {
      groupMapsTo: 'id',
    },
    axes: {
      left: {
        mapsTo: 'quantity',
        title: 'Quantity',
        ticks: {
          values: [0, 100, 200, 300, 400, 500],
        },
      },
      bottom: {
        mapsTo: 'id',
        scaleType: ScaleTypes.LABELS,
        title: 'Months',
      },
    },
    tooltip: {
      enabled: false,
    },
    bars: {
      width: 50,
    },
    color: {
      scale: {
        Jan: '#6929c4',
        Feb: '#6929c4',
        Mar: '#6929c4',
        Apr: '#6929c4',
        May: '#6929c4',
        Jun: '#6929c4',
        Jul: '#6929c4',
        Aug: '#6929c4',
        Sep: '#6929c4',
        Oct: '#6929c4',
        Nov: '#6929c4',
        Dec: '#6929c4',
      },
    },
    legend: {
      enabled: false,
    },
    height: '200px',
  };

  const handleClick = (e: any) => {};

  return (
    <div>
      <div className="bx--grid">
        <div className="bx--row">
          <section className="landing-page__header">
            <div>
              <Breadcrumb aria-label="Page navigation">
                <BreadcrumbItem href="/">All Reports</BreadcrumbItem>
              </Breadcrumb>
            </div>
            <h4>
              Report Name
              <span className="bx--col">
                <Information20 />
              </span>
              <OverflowMenuVertical20 className="header__toolbar" />
              <Share20 className="header__toolbar" />
              <Edit20 className="header__toolbar" />
              <Star20 className="header__toolbar" />
            </h4>
          </section>
        </div>
      </div>
      <div className="bx--grid">
        <div className="bx--row">
          <section className="landing-page__r2">
            <SimpleBarChart data={mockData} options={options}></SimpleBarChart>
          </section>
        </div>
      </div>

      <div className="bx--grid">
        <div className="bx--row">
          <section className="landing-page__r3">
            <DataTable
              rows={mockData}
              headers={headers}
              isSortable
              stickyHeader
              render={({
                rows,
                headers,
                getHeaderProps,
                getRowProps,
                getTableProps,
              }) => (
                <TableContainer title="2021 sales" description="#sales/month">
                  <TableToolbar>
                    <TableToolbarContent>
                      <TableToolbarAction onClick={handleClick}>
                        <Search16 />
                      </TableToolbarAction>
                      <TableToolbarAction onClick={handleClick}>
                        <Edit16 />
                      </TableToolbarAction>
                      <TableToolbarAction onClick={handleClick}>
                        <Settings16 />
                      </TableToolbarAction>
                    </TableToolbarContent>
                  </TableToolbar>
                  <Table {...getTableProps()}>
                    <TableHead>
                      <TableRow>
                        {headers.map((header) => (
                          <TableHeader {...getHeaderProps({ header })}>
                            {header.header}
                          </TableHeader>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow {...getRowProps({ row })}>
                          {row.cells.map((cell) => (
                            <TableCell key={cell.id}>{cell.value}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
