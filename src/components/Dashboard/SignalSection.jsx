import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function SignalsSection() {
  // Table data
  const tableData = [
    {
      id: "2047",
      nickname: "PKHUF_Zerodha",
      transactionType: "BUY",
      quantity: "50,000",
      averagePrice: "-",
      ltp: "₹1.26",
      orderType: "LIMIT",
      status: "Error",
      broker: "Zerodha",
      statusInfo: "1x | Blocked",
      lastUpdated: "24 July 2025, 03:55 AM",
      checked: true,
    },
    {
      id: "2047",
      nickname: "PKHUF_Zerodha",
      transactionType: "BUY",
      quantity: "50,000",
      averagePrice: "-",
      ltp: "₹1.26",
      orderType: "LIMIT",
      status: "Error",
      broker: "Zerodha",
      statusInfo: "1x | Blocked",
      lastUpdated: "24 July 2025, 03:55 AM",
      checked: false,
    },
  ];

  // Table headers
  const headers = [
    { id: "id", label: "id" },
    { id: "nickname", label: "Nickname" },
    { id: "transactionType", label: "Transaction Type" },
    { id: "quantity", label: "Quantity" },
    { id: "averagePrice", label: "Average Price" },
    { id: "ltp", label: "LTP" },
    { id: "orderType", label: "Order Type" },
    { id: "status", label: "Status" },
    { id: "broker", label: "Broker" },
    { id: "lastUpdated", label: "Last Updated" },
    { id: "lastUpdated2", label: "Last Updated" },
  ];

  return (
    <div className="flex flex-col w-full items-start gap-4 relative">
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="font-semibold text-xl text-[#1e2833]">
              Open Signals
            </CardTitle>
            <span className="opacity-0 text-base">See All</span>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex flex-col w-full bg-white rounded-md overflow-hidden">
              {/* Action bar */}
              <div className="flex items-center justify-between p-2 bg-[#7a7a7a33]">
                <div className="flex-1 h-[38px]"></div>
                <Button className="bg-[linear-gradient(90deg,rgba(0,92,137,1)_0%,rgba(1,47,70,1)_100%)] text-white h-auto">
                  Exit
                </Button>
              </div>

              {/* Table */}
              <Table>
                <TableHeader className="bg-theme-background-neutral">
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox />
                    </TableHead>
                    {headers.map((header) => (
                      <TableHead
                        key={header.id}
                        className="text-theme-text-secondary-duplicate"
                      >
                        {header.label}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((row, index) => (
                    <TableRow
                      key={index}
                      className="border-b border-dashed border-theme-components-divider"
                    >
                      <TableCell className="pl-4">
                        {row.checked ? (
                          <div className="flex items-center justify-center rounded-full">
                            <div className="w-5 h-5 relative">
                              <Check className="w-4 h-4 absolute top-0.5 left-0.5" />
                            </div>
                          </div>
                        ) : (
                          <Checkbox />
                        )}
                      </TableCell>
                      <TableCell className="whitespace-nowrap font-body-2 text-[#1e2833]">
                        {row.id}
                      </TableCell>
                      <TableCell className="whitespace-nowrap font-body-2 text-[#1e2833]">
                        {row.nickname}
                      </TableCell>
                      <TableCell className="whitespace-nowrap font-body-2 text-[#1e2833]">
                        {row.transactionType}
                      </TableCell>
                      <TableCell className="whitespace-nowrap font-body-2 text-[#1e2833]">
                        {row.quantity}
                      </TableCell>
                      <TableCell className="whitespace-nowrap font-body-2 text-[#1e2833]">
                        {row.averagePrice}
                      </TableCell>
                      <TableCell className="whitespace-nowrap font-body-2 text-[#1e2833]">
                        {row.ltp}
                      </TableCell>
                      <TableCell className="whitespace-nowrap font-body-2 text-[#1e2833]">
                        {row.orderType}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="bg-core-colors-error-16 text-theme-swap-dark-light-error"
                        >
                          {row.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="whitespace-nowrap font-body-2 text-[#1e2833]">
                        {row.broker}
                      </TableCell>
                      <TableCell className="whitespace-nowrap font-body-2 text-[#1e2833]">
                        <span>{row.statusInfo}</span>
                      </TableCell>
                      <TableCell className="whitespace-nowrap font-body-2 text-[#1e2833]">
                        {row.lastUpdated}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination */}
              <div className="flex items-center justify-end gap-5 p-2.5 px-4">
                <div className="flex-1 text-right font-body-2 text-[#1e2833]">
                  Rows per page:
                </div>
                <Select defaultValue="5">
                  <SelectTrigger className="w-[70px] border-none shadow-none h-8">
                    <SelectValue>5</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectContent>
                </Select>
                <div className="font-body-2 text-[#1e2833] whitespace-nowrap">
                  6-10 of 11
                </div>
                <div className="flex items-center">
                  <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
