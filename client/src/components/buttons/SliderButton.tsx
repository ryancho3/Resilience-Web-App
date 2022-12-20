import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { colors } from '@mui/material';
import COLORS from '../../assets/colors';

interface SliderButtonProps {
  setRole: (field: string, value: string) => void;
  role: string;
}

export default function SliderButton({ setRole, role }: SliderButtonProps) {
  const tabs = ['FIP', 'HR Manager'];

  // const [selectedRole, setSelectedRole] = useState(0);
  // const [formerColor, setFormerColor] = useState(tabs[0].color);

  const containerStyle = {
    position: 'relative',
    borderRadius: 50,
    backgroundColor: COLORS.lightGray,
    padding: 10,
    display: 'flex',
    alignContent: 'flex-start',
    alignItems: 'start',
    justifyContent: 'center',
  };

  const tabStyle = {
    height: 30,
    position: 'relative',
    padding: '20px 25px',
    margin: 0,
    fontFamily: 'sans-serif',
    fontSize: 20,
    fontWeight: 700,
    color: '#222',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  };

  const selectionStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 50,
    top: 0,
    bottom: 0,
    left: 0,
  };

  const duration = 0.3;

  return (
    <div style={containerStyle as React.CSSProperties}>
      {tabs.map((item) => (
        <motion.div
          style={tabStyle as React.CSSProperties}
          initial={{
            color:
              role === item.split(' ')[0].toLowerCase() ? '#FFF' : COLORS.gray,
          }}
          animate={{
            color:
              role === item.split(' ')[0].toLowerCase() ? '#FFF' : COLORS.gray,
          }}
          transition={{ duration }}
          onTap={() => {
            setRole('role', item.split(' ')[0].toLowerCase());
          }}
        >
          <span style={{ position: 'relative', zIndex: 1 }}>{item}</span>
          {role === item.split(' ')[0].toLowerCase() && (
            <motion.div
              style={selectionStyle as React.CSSProperties}
              layoutId="selected"
              initial={{ backgroundColor: '#76CF2D' }}
              animate={{ backgroundColor: '#76CF2D' }}
              transition={{ duration }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
