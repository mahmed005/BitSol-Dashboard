import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CustomButton from "../../UI/CustomButton";

function createData(date: Date, type: string) {
  return { date, type };
}

function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options).replace(",", " ");
}

const rows = [
  createData(new Date("Oct. 21, 2021"), "Pro Annual"),
  createData(new Date("Aug. 21, 2021"), "Pro Portfolio"),
  createData(new Date("July. 21, 2021"), "Sponsored Post"),
  createData(new Date("Jun. 21, 2021"), "Sponsored Post"),
];

export default function BillingTable() {
  return (
    <Stack spacing={2}>
      <TableContainer
        sx={{
          boxShadow: "none",
        }}
        component={Paper}
      >
        <Table
          sx={{
            minWidth: 480,
            "& th, td": {
              border: "0px solid",
              paddingLeft: "0px",
            },
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow
              sx={{
                "& th": { color: "customGrey.dark" },
              }}
            >
              <TableCell>Date</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Receipt</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "& td, th": {
                    color: "black",
                    fontWeight: "500",
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  {formatDate(row.date)}
                </TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>
                  <CustomButton
                    classes={{
                      color: "black",
                      borderColor: "customGrey.main",
                    }}
                    text={"Download"}
                    importance={"outlined"}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomButton
        text="Load More"
        importance="text"
        classes={{
          alignSelf: "flex-start",
        }}
      />
    </Stack>
  );
}
