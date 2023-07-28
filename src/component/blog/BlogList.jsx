import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import { ViewIcon, ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";

import useApiRequest from "../../util/customhook/UseApiRequest";
import { getALLBlogsApiEndPoint } from "../../common/ApiInfo";
import Loader from "../loader/Loader";
import dateTimeFormatter from "../../util/DateTimeFormatter";

const BlogList = () => {
  const navigate = useNavigate();

  const payload = {
    offset: 0,
    orderType: "asc",
    pageSize: 10,
    sortBy: "id",
  };

  useEffect(() => {
    fetchData(payload);
  }, []);

  const { data, isLoading, error, fetchData } = useApiRequest(
    "POST",
    getALLBlogsApiEndPoint
  );

  const [columsData, setColumsData] = useState([
    { name: "Id", sort: "asc", fieldName: "id" },
    { name: "Title", sort: "none", fieldName: "title" },
    { name: "Created At", sort: "asc", fieldName: "createdAt" },
    { name: "Created By", sort: "none", fieldName: "createdBy" },
    { name: "Total Views", sort: "asc", fieldName: "totalViews" },
    { name: "Total Likes", sort: "asc", fieldName: "totalLikes" },
  ]);

  const sortHandler = (columnName, fieldName, sortType) => {
    let columns = [...columsData];
    columns.map((column) =>
      column.name === columnName
        ? (column.sort = sortType)
        : column.name === "Title" || column.name === "Created By"
        ? (column.sort = "none")
        : (column.sort = "asc")
    );
    setColumsData(columns);
    payload.orderType = sortType;
    payload.sortBy = fieldName;
    fetchData(payload);
  };

  const tableContent = (
    <Tbody>
      {data?.map((blog) => {
        return (
          <Tr
            key={blog.id}
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/blog/" + blog.id)}
            _hover={{
              bg: "cyan.400",
              color: "black",
             
            }}
          >
            <Td style={{ textAlign: "center" }}>{blog.id}</Td>
            <Td style={{ textAlign: "center" }}>{blog.title}</Td>
            <Td style={{ textAlign: "center" }}>
              {dateTimeFormatter(blog.createdAt)}
            </Td>
            <Td style={{ textAlign: "center" }}>{blog.createdBy}</Td>
            <Td style={{ textAlign: "center" }}>{blog.totalViews}</Td>
            <Td style={{ textAlign: "center" }}>{blog.totalLikes}</Td>
          </Tr>
        );
      })}
    </Tbody>
  );

  //   fetchData(payload);

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {columsData.map((column) => (
                <Th style={{ textAlign: "center" }}>
                  {column.name}{" "}
                  {column.sort === "none" ? null : column.sort === "asc" ? (
                    <ArrowUpIcon
                      style={{ cursor: "pointer", color: "green" }}
                      onClick={() =>
                        sortHandler(column.name, column.fieldName, "desc")
                      }
                    />
                  ) : (
                    <ArrowDownIcon
                      style={{ cursor: "pointer", color: "red" }}
                      onClick={() =>
                        sortHandler(column.name, column.fieldName, "asc")
                      }
                    />
                  )}{" "}
                </Th>
              ))}
            </Tr>
          </Thead>

          {isLoading ? <Loader /> : tableContent}
        </Table>
      </TableContainer>
    </>
  );
};

export default BlogList;
