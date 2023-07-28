import React from 'react'

const dateTimeFormatter = (dateString) => {

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
  
      const dateObj = new Date(dateString);
      const day = dateObj.getDate();
      const month = months[dateObj.getMonth()];
      const year = dateObj.getFullYear();
      const hours = dateObj.getHours();
      const minutes = dateObj.getMinutes();
      const amOrPm = hours >= 12 ? 'pm' : 'am';
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      const formattedMinutes = minutes.toString().padStart(2, '0');
      return `${day} ${month} ${year} ${formattedHours}:${formattedMinutes} ${amOrPm}`;
    }

export default dateTimeFormatter