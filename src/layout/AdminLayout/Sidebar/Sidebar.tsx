import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Button } from "react-bootstrap";
import SidebarNav from "./SidebarNav";

export default function Sidebar(props: { isShow: boolean; isShowMd: boolean }) {
  const { isShow, isShowMd } = props;
  const [isNarrow, setIsNarrow] = useState(false);

  const toggleIsNarrow = () => {
    const newValue = !isNarrow;
    localStorage.setItem("isNarrow", newValue ? "true" : "false");
    setIsNarrow(newValue);
  };

  // On first time load only
  useEffect(() => {
    if (localStorage.getItem("isNarrow")) {
      setIsNarrow(localStorage.getItem("isNarrow") === "true");
    }
  }, [setIsNarrow]);

  return (
    <div
      className={classNames("sidebar d-flex flex-column position-fixed h-100", {
        "sidebar-narrow": isNarrow,
        show: isShow,
        "md-hide": !isShowMd,
      })}
      id="sidebar"
    >
      <div className="sidebar-brand d-none d-md-flex align-items-center justify-content-center">
        <svg
          id="MARK"
          xmlns="http://www.w3.org/2000/svg"
          width="64.322"
          height="56.018"
          viewBox="0 0 64.322 56.018"
        >
          <path
            id="Path_1050"
            data-name="Path 1050"
            d="M93.158,63.447V74.2l14.926,26,14.926-26V63.447L108.083,88.712Z"
            transform="translate(-75.922 -44.183)"
            fill="#3c0f59"
          />
          <path
            id="Path_1051"
            data-name="Path 1051"
            d="M140.244,44.183H117.589l-9.505,16.476L98.578,44.183H75.922L87.171,63.775V52.928H94.9l13.181,23.32,13.181-23.32H129V63.775Z"
            transform="translate(-75.922 -44.183)"
            fill="#0e001e"
          />
        </svg>
      </div>

      <div className="sidebar-nav flex-fill">
        <SidebarNav />
      </div>

      <Button
        variant="link"
        className="sidebar-toggler d-none d-md-inline-block rounded-0 text-end pe-4 fw-bold shadow-none"
        onClick={toggleIsNarrow}
        type="button"
        aria-label="sidebar toggler"
      >
        <FontAwesomeIcon
          className="sidebar-toggler-chevron"
          icon={faAngleLeft}
          fontSize={24}
        />
      </Button>
    </div>
  );
}

export const SidebarOverlay = (props: {
  isShowSidebar: boolean;
  toggleSidebar: () => void;
}) => {
  const { isShowSidebar, toggleSidebar } = props;

  return (
    <div
      tabIndex={-1}
      aria-hidden
      className={classNames(
        "sidebar-overlay position-fixed top-0 bg-dark w-100 h-100 opacity-50",
        {
          "d-none": !isShowSidebar,
        }
      )}
      onClick={toggleSidebar}
    />
  );
};
