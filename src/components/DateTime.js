import React from 'react'
import { useDateTime } from '@/hooks/useDateTime'

const DateTime = () => {
    const {
        englishDateTime,
        nepaliDateTime,
        bsDate
    } = useDateTime();
    
    return (
        <div>
          <p><strong>English (AD):</strong> {englishDateTime}</p>
          <p><strong>नेपाली (AD):</strong> {nepaliDateTime}</p>
          <p><strong>बिक्रम संवत् (BS):</strong> {bsDate}</p>
        </div>
    );
}

export default DateTime
