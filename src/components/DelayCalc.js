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

  if (!results) return null;

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
              <Subtitle>Regular</Subtitle>
              <DelayValues results={results.regular} />
            </DelayValuesContainer>
          </Display>
          <Display>
            <DelayValuesContainer>
              <Subtitle>Triplet</Subtitle>
              <DelayValues results={results.triplet} />
            </DelayValuesContainer>
          </Display>
          <Display>
            <DelayValuesContainer>
              <Subtitle>Dotted</Subtitle>
              <DelayValues results={results.dotted} />
            </DelayValuesContainer>
          </Display>

          <Subtitle>Reverb Times</Subtitle>
          <div>
            {Object.entries(results.reverbTimes).map(([key, value]) => (
              <Reverb key={key}>
                <Item>
                  <Key>Pre-Delay:</Key>
                  <Value>{value.preDelay}ms</Value>
                </Item>

                <Item>
                  <Key>Decay Time:</Key>
                  <Value>{value.decayTime}ms</Value>
                </Item>

                <Item>
                  <Key>Total Reverb Time:</Key>
                  <Value>{value.totalReverbTime}ms</Value>
                </Item>
              </Reverb>
            ))}
          </div>

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

const Subtitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin: 10px 0px 10px 0px;
  color: ${colors.textBlack};
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

  @media (max-width: 768px) {
    width: 70%;
  }
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Circles = styled.div`
  width: 100%;
  height: 290px;
  position: relative;
  display: flex;
`;

const Reverb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px 0;
  margin: 10px 0;
  border-bottom: 1px solid ${colors.textBlack};
`;

const Item = styled.li`
  display: flex;
  gap: 10px;
`;

const Key = styled.div`
  font-weight: 600;
`;

const Value = styled.div`
  font-weight: 300;
`;

export default DelayCalculator;
