import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import React from "react";
import PropTypes from "prop-types";

/**
 * @param {string} props
 * @param {string} props.text
 * @returns {JSX.Element}
 */
const CustomTooltip = (props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Info  size={40} />
        </TooltipTrigger>
        <TooltipContent className="w-8 text-wrap">
          <p>{props.text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

CustomTooltip.propTypes = {
  props: PropTypes.object,
};

export default CustomTooltip;
