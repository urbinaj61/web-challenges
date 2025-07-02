import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  onLightsOff,
  onLightsOn,
  lightsOnCount,
}) {
  console.log(onLightsOff);
  return (
    <StyledQuickActions>
      <Button
        disabled={lightsOnCount === 0}
        type='button'
        onClick={onLightsOff}
      >
        Turn all lights off
      </Button>
      <Button disabled={lightsOnCount > 0} type='button' onClick={onLightsOn}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
