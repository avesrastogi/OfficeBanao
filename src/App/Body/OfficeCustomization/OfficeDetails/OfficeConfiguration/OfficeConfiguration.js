import React, { useCallback, useEffect, useRef, useState } from 'react'
import './OfficeConfiguration.css';
//import InlineEdit from './InlineEdit';

function OfficeConfiguration({ totalArea = 3200}) {
  //const [disableButton,setDisableButton] = useState(false);

  const [configuredArea, setConfiguredArea] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.value = configuredArea;
  }, []);

  const onInputBlur = useCallback(function(e) {
    setConfiguredArea(e.target.value);
  }, []);

  const focusOnInput = useCallback(function() {
    ref.current.value = '';
    ref.current.focus()
  }, [ref]);

  const hasRemainingArea = totalArea - configuredArea > 0;

  return (
    <div className="office-area-config">
        <div className="configure-text">Configuring your office</div>
        <div className="configure-subtext">Based on your design preference and your office area below is a configuration for your space.</div>
        <div className="total-area">
            <div className='editable-total-area'>
              <div className='total-area-text'>
                Total Area <span className='area-unit'>(SFT)</span>
              </div>
              <input type="number" className='area-input' ref={ref} onBlur={onInputBlur} /> <span onClick={focusOnInput}>Edit</span>
            </div>
            {hasRemainingArea && <div className="remaining-area">-{totalArea - configuredArea}</div>}
            <div className="total-configured-area">{configuredArea}</div>
        </div>
        {hasRemainingArea ? <div className="more-area-remaining">You still have some area to cover</div> : null}

    </div>
  )
}

export default OfficeConfiguration
