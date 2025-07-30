import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
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
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
} from "lucide-react";
import React from "react";

const AppSummarySection = () => {
  // Data for the table rows
  const signalData = [
    {
      strategy: "Nifty call buy (0)",
      author: "Sumit Thakur",
      execution: "Paper Trading at\nTT Paper Trading",
      positions: "0 | 0",
      multiplier: "1x",
      status: "Blocked",
      pnl: "0",
    },
    {
      strategy: "Nifty call buy (0)",
      author: "Sumit Thakur",
      execution: "Paper Trading at\nTT Paper Trading",
      positions: "0 | 0",
      multiplier: "1x",
      status: "Blocked",
      pnl: "0",
    },
  ];

  // Table headers
  const tableHeaders = [
    "Strategy (Counter)",
    "Execution",
    "Open | Total Positions",
    "Multiplier | Status",
    "Total P&L",
    "",
  ];

  return (
    <section className="flex flex-col items-start gap-4 w-full">
      <div className="flex flex-col items-start gap-6 w-full">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between px-6 pb-0">
            <CardTitle className="font-semibold text-xl text-[#1e2833] font-['Outfit-SemiBold',Helvetica]">
              Live Signals
            </CardTitle>
            <Button
              variant="link"
              className="font-normal text-base text-[#1e2833] font-['Outfit-Regular',Helvetica] p-0"
            >
              See All
            </Button>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full bg-white rounded-lg overflow-hidden">
              <Table>
                <TableHeader className="bg-theme-background-neutral">
                  {tableHeaders.map((header, index) => (
                    <TableHead
                      key={index}
                      className={`font-components-table-head text-theme-text-secondary-duplicate ${index === tableHeaders.length - 2 ? "text-right" : ""}`}
                    >
                      {header}
                    </TableHead>
                  ))}
                </TableHeader>
                <TableBody>
                  {signalData.map((row, index) => (
                    <TableRow
                      key={index}
                      className="border-b border-dashed border-theme-components-divider"
                    >
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-body-2 text-[#1e2833] whitespace-nowrap">
                            {row.strategy}
                          </span>
                          <span className="font-body-2 text-theme-text-secondary-duplicate whitespace-nowrap">
                            By - {row.author}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-body-2 text-[#1e2833]">
                          {row.execution.split("\n").map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              {i < row.execution.split("\n").length - 1 && (
                                <br />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="font-body-2 text-[#1e2833] whitespace-nowrap">
                          {row.positions}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="font-body-2 text-[#1e2833] whitespace-nowrap">
                          <span>{row.multiplier} | </span>
                          <span>{row.status}</span>
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="font-body-2 text-[#1e2833] whitespace-nowrap">
                          {row.pnl}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-[var(--core-components-icon-button-sm-size)] w-[var(--core-components-icon-button-sm-size)] rounded-[var(--core-components-icon-button-radius)]"
                            >
                              <MoreVertical className="h-5 w-5" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex items-center justify-end gap-5 px-4 py-2.5">
                <span className="flex-1 text-right font-body-2 text-[#1e2833]">
                  Rows per page:
                </span>
                <Select defaultValue="5">
                  <SelectTrigger className="w-auto border-none shadow-none p-0">
                    <SelectValue />
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                  </SelectContent>
                </Select>
                <span className="font-body-2 text-[#1e2833] whitespace-nowrap">
                  6-10 of 11
                </span>
                <div className="flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-[var(--core-components-icon-button-sm-size)] w-[var(--core-components-icon-button-sm-size)] rounded-[var(--core-components-icon-button-radius)]"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-[var(--core-components-icon-button-sm-size)] w-[var(--core-components-icon-button-sm-size)] rounded-[var(--core-components-icon-button-radius)]"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AppSummarySection;
