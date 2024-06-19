import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { colors } from "../library/colors";
import "../library/fonts/Bogart-Light.ttf";
import "../library/fonts/Bogart-Regular.ttf";
import { DelayValues } from "./DelayValues";

const DelayCalculator = () => {
  const [bpm, setBPM] = useState(120); // controls input value
  const [results, setResults] = useState({}); // stores calculated values
  const noteTypes = ["Whole", "Half", "Quarter", "Eighth", "Sixteenth"];

  const calculateValues = (baseDelay, multiplier) => {
    const delay = baseDelay * multiplier;
    const freq = 1000 / delay;
    return {
      delay: delay.toFixed(2),
      freq: freq.toFixed(2),
    };
  };

  const calculateNoteValues = (noteType, baseDelay, multipliers) => {
    return multipliers.reduce((acc, multiplier, index) => {
      const values = calculateValues(baseDelay, multiplier);
      acc[noteTypes[index]] = {
        delay: values.delay,
        freq: values.freq,
      };
      return acc;
    }, {});
  };

  const result = useMemo(() => {
    if (bpm > 0) {
      const baseDelay = 60000 / bpm;

      const regularMultipliers = [4, 2, 1, 0.5, 0.25];
      const dottedMultipliers = regularMultipliers.map((val) => val * 1.5);
      const tripletMultipliers = regularMultipliers.map((val) => val * (2 / 3));

      const regularNoteValues = calculateNoteValues(
        "Regular",
        baseDelay,
        regularMultipliers
      );
      const dottedNoteValues = calculateNoteValues(
        "Dotted",
        baseDelay,
        dottedMultipliers
      );
      const tripletNoteValues = calculateNoteValues(
        "Triplet",
        baseDelay,
        tripletMultipliers
      );

      const reverbTimes = {
        reverbHall: {
          preDelay: baseDelay / 8,
          decayTime: baseDelay * 4 * 2 - baseDelay / 8,
          totalReverbTime: baseDelay * 4 * 2, // For 2 bars
        },
        reverbLargeRoom: {
          preDelay: baseDelay / 16,
          decayTime: baseDelay * 4 - baseDelay / 16,
          totalReverbTime: baseDelay * 4, // For 1 bar
        },
        reverbSmallRoom: {
          preDelay: baseDelay / 32,
          decayTime: baseDelay * 2 - baseDelay / 32,
          totalReverbTime: baseDelay * 2, // For 1/4 note
        },
        reverbTightAmbience: {
          preDelay: baseDelay / 128,
          decayTime: baseDelay - baseDelay / 128,
          totalReverbTime: baseDelay, // For 1/8 note
        },
      };

      return {
        regular: regularNoteValues,
        dotted: dottedNoteValues,
        triplet: tripletNoteValues,
        reverbTimes: reverbTimes,
      };
    }
  }, [bpm]);

  useEffect(() => {
    setResults(result);
  }, [result]);

  const handleBPMChange = (e) => {
    setBPM(e.target.value);
  };

  return (
    <Calculator>
      <Title>Delay Calculator</Title>
      <Controls>
        <BpmInput type="number" value={bpm} onChange={handleBPMChange} />
        <BpmSlider
          type="range"
          min="40"
          max="220"
          onChange={handleBPMChange}
          value={bpm}
        />
      </Controls>
      {Object.keys(results).length > 0 && (
        <>
          <Display>
            <DelayValuesContainer>
              <h2>Regular</h2>
              <DelayValues results={results.regular} />
            </DelayValuesContainer>

            <Circles>
              {Object.entries(results).length > 0 &&
                Object.entries(results.regular)
                  .sort((a, b) => a[1].delay - b[1].delay)
                  .map(([noteType, value], index) => {
                    return (
                      <div
                        key={value.delay}
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: `${20 + index * 10}%`,
                          transform: "translate(-50%, -50%)",
                          width: `${results.dotted[noteType].delay / 20}px`,
                          height: `${results.dotted[noteType].delay / 20}px`,
                          borderRadius: "50%",
                          backgroundColor: colors.blue,
                          opacity: `${1 - index * 0.2}`,
                          border: `1px solid ${colors.textBlack}`,
                          animation: `echo 2s ${value.delay / 1000}s infinite`,
                        }}
                      ></div>
                    );
                  })}
            </Circles>
          </Display>
          <Display>
            <DelayValuesContainer>
              <h2>Triplet</h2>
              <DelayValues results={results.triplet} />
            </DelayValuesContainer>

            <Circles>
              {Object.entries(results).length > 0 &&
                Object.entries(results.triplet)
                  .sort((a, b) => a[1].delay - b[1].delay)
                  .map(([noteType, value], index) => {
                    const circles = [];
                    for (let i = 0; i < 3; i++) {
                      circles.push(
                        <div
                          key={`${value.delay}-${i}`}
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: `${20 + index * 10 + i * 2}%`,
                            transform: "translate(-50%, -50%)",
                            width: `${results.dotted[noteType].delay / 20}px`,
                            height: `${results.dotted[noteType].delay / 20}px`,
                            borderRadius: "50%",
                            backgroundColor: colors.dimGrey,
                            opacity: `${1 - index * 0.2}`,
                            border: `1px solid ${colors.textBlack}`,
                            animation: `echo 2s ${
                              value.delay / 1000 + i * 0.2
                            }s infinite`,
                          }}
                        ></div>
                      );
                    }
                    return circles;
                  })}
            </Circles>
          </Display>
          <Display>
            <DelayValuesContainer>
              <h2>Dotted</h2>
              <DelayValues results={results.dotted} />
            </DelayValuesContainer>

            <Circles>
              {Object.entries(results).length > 0 &&
                Object.entries(results.dotted)
                  .sort((a, b) => a[1].delay - b[1].delay)
                  .map(([noteType, value], index) => {
                    const circles = [];
                    for (let i = 0; i < 4; i++) {
                      // change this to 4
                      circles.push(
                        <div
                          key={`${value.delay}-${i}`}
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: `${20 + index * 10 + i * 2}%`,
                            transform: "translate(-50%, -50%)",
                            width: `${results.dotted[noteType].delay / 20}px`,
                            height: `${results.dotted[noteType].delay / 20}px`,
                            borderRadius: "50%",
                            backgroundColor: colors.dimGrey,
                            opacity: `${1 - index * 0.2}`,
                            border: `1px solid ${colors.textBlack}`,
                            animation: `echo 2s ${
                              value.delay / 1000 + i * 0.2
                            }s infinite`,
                          }}
                        ></div>
                      );
                    }
                    return circles;
                  })}
            </Circles>
          </Display>
        </>
      )}
    </Calculator>
  );
};

const Title = styled.h1`
  font-size: clamp(3rem, 5vw, 4rem);
  margin: 10px 0px 10px 0px;
  color: ${colors.textWhite};
`;

const Calculator = styled.div`
  width: 100%;
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Hanken Grotesk";
`;

const Controls = styled.div`
  width: 50%;
  display: flex;
`;

const BpmInput = styled.input`
  width: 80px;
  padding: 5px;
  margin: 20px 20px 20px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const BpmSlider = styled.input`
  width: 100%;
  margin: 20px 0;
`;

const Display = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
`;

const DelayValuesContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Circles = styled.div`
  width: 80%;
  height: 290px;
  position: relative;
  display: flex;
`;

export default DelayCalculator;
