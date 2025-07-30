import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Search,
} from "lucide-react";
import React from "react";

export default function BrokerListingSection() {
  // Data for table rows
  const brokerData = [
    {
      id: "B01",
      broker: "Broker1",
      username: "Broker12",
      accountNumber: "365-374-4961",
      brokerName: "Angel",
      apiKey: "cTY41451",
      password: "1245Df",
      secretKey: "dsds8151dsds",
      status: "Connected",
    },
    {
      id: "B02",
      broker: "Broker2",
      username: "Broker22",
      accountNumber: "365-374-4962",
      brokerName: "Bob",
      apiKey: "cTY41452",
      password: "1245Dg",
      secretKey: "dsds8152dsds",
      status: "Connected",
    },
    {
      id: "B03",
      broker: "Broker3",
      username: "Broker32",
      accountNumber: "365-374-4963",
      brokerName: "Cathy",
      apiKey: "cTY41453",
      password: "1245Dh",
      secretKey: "dsds8153dsds",
      status: "Disconnected",
    },
    {
      id: "B04",
      broker: "Broker4",
      username: "Broker42",
      accountNumber: "365-374-4964",
      brokerName: "David",
      apiKey: "cTY41454",
      password: "1245Di",
      secretKey: "dsds8154dsds",
      status: "Connected",
    },
    {
      id: "B05",
      broker: "Broker1",
      username: "Broker12",
      accountNumber: "365-374-4961",
      brokerName: "Angel",
      apiKey: "cTY41451",
      password: "1245Df",
      secretKey: "dsds8151dsds",
      status: "Connected",
    },
  ];

  // Table column headers
  const columns = [
    { id: "id", label: "ID", width: "136px" },
    { id: "broker", label: "Broker", width: "238px" },
    { id: "username", label: "Username", width: "220px" },
    { id: "accountNumber", label: "Account Number", width: "220px" },
    { id: "brokerName", label: "Broker Name", width: "220px" },
    { id: "apiKey", label: "API KEY", width: "220px" },
    { id: "password", label: "Password", width: "180px" },
    { id: "secretKey", label: "Secret Key", width: "180px" },
    { id: "status", label: "Status", width: "124px" },
    { id: "actions", label: "", width: "104px" },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col w-full items-start gap-[19px]">
        <h2 className="font-semibold text-[#212121] text-base leading-[22px]">
          Broker Listing
        </h2>

        <Card className="w-full">
          <div className="flex items-center gap-2 pt-2.5 pr-1 pb-2.5 pl-2.5 w-full">
            <div className="flex-1">
              <div className="flex h-10 items-center relative w-full rounded-md border border-solid border-theme-components-textfield-outline-duplicate">
                <div className="inline-flex items-center pr-2 pl-3">
                  <Search className="w-6 h-6" />
                </div>
                <Input
                  className="border-0 shadow-none flex-1 font-normal text-theme-text-disabled-duplicate text-[15px] leading-[22px]"
                  placeholder="Search..."
                />
              </div>
            </div>
            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-md">
              <MoreVertical className="w-5 h-5" />
            </Button>
          </div>

          <div className="w-full overflow-x-auto">
            <Table>
              <TableHeader className="bg-theme-background-neutral">
                {columns.map((column) => (
                  <TableHead
                    key={column.id}
                    className="font-components-table-head text-theme-text-secondary-duplicate"
                    style={{ width: column.width }}
                  >
                    {column.label}
                  </TableHead>
                ))}
              </TableHeader>
              <TableBody>
                {brokerData.map((row, index) => (
                  <TableRow
                    key={index}
                    className="border-b border-dashed border-theme-components-divider"
                  >
                    <TableCell className="font-body-2 text-[#1e2833]">
                      {row.id}
                    </TableCell>
                    <TableCell className="font-body-2 text-[#1e2833]">
                      {row.broker}
                    </TableCell>
                    <TableCell className="font-body-2 text-[#1e2833]">
                      {row.username}
                    </TableCell>
                    <TableCell className="font-body-2 text-[#1e2833]">
                      {row.accountNumber}
                    </TableCell>
                    <TableCell className="font-body-2 text-[#1e2833]">
                      {row.brokerName}
                    </TableCell>
                    <TableCell className="font-body-2 text-[#1e2833]">
                      {row.apiKey}
                    </TableCell>
                    <TableCell className="font-body-2 text-[#1e2833]">
                      {row.password}
                    </TableCell>
                    <TableCell className="font-body-2 text-[#1e2833]">
                      {row.secretKey}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`inline-flex items-center justify-center gap-1 px-2 py-0 ${
                          row.status === "Connected"
                            ? "bg-core-colors-success-16 text-theme-swap-dark-light-success"
                            : "bg-core-colors-error-16 text-theme-swap-dark-light-error"
                        }`}
                      >
                        {row.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-8 h-8 rounded-md"
                          >
                            <MoreVertical className="w-5 h-5" />
                          </Button>
                        </DropdownMenuTrigger>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-end gap-5 pl-4 pr-2 py-2.5 w-full">
            <div className="flex-1 font-body-2 text-[#1e2833] text-right">
              Rows per page:
            </div>
            <div className="flex items-center gap-0.5">
              <span className="font-body-2 text-[#1e2833]">5</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="font-body-2 text-[#1e2833] whitespace-nowrap">
              Page 1 of 10
            </div>
            <div className="flex items-start">
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 rounded-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 rounded-md"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
