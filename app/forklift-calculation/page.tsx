'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ForkliftCalculation() {
  const [inputs, setInputs] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    formula: 'formula1',
  });

  const calculateResult = () => {
    const { input1, input2, input3, input4, input5, formula } = inputs;
    const num1 = parseFloat(input1) || 0;
    const num2 = parseFloat(input2) || 0;
    const num3 = parseFloat(input3) || 0;
    const num4 = parseFloat(input4) || 0;
    const num5 = parseFloat(input5) || 0;

    if (formula === 'formula1') {
      // Formula 1: (num1 + num2) * num3 - num4 / num5
      return ((num1 + num2) * num3 - num4 / (num5 || 1)).toFixed(2);
    } else {
      // Formula 2: (num1 * num2) + (num3 - num4) * num5
      return ((num1 * num2) + (num3 - num4) * num5).toFixed(2);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleFormulaChange = (value: string) => {
    setInputs(prev => ({ ...prev, formula: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Forklift Calculation
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Inputs */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="formula" className="text-gray-700">Select Formula</Label>
                  <Select
                    value={inputs.formula}
                    onValueChange={handleFormulaChange}
                  >
                    <SelectTrigger className="w-full mt-2">
                      <SelectValue placeholder="Select formula" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="formula1">Formula 1</SelectItem>
                      <SelectItem value="formula2">Formula 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num}>
                    <Label htmlFor={`input${num}`} className="text-gray-700">
                      Input {num}
                    </Label>
                    <Input
                      id={`input${num}`}
                      name={`input${num}`}
                      type="number"
                      value={inputs[`input${num}` as keyof typeof inputs]}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder={`Enter value ${num}`}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Right side - Result */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
            <CardContent className="p-6">
              <div className="h-full flex flex-col justify-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Result
                </h2>
                <div className="text-4xl font-bold text-blue-600">
                  {calculateResult()}
                </div>
                <div className="mt-4 text-gray-600">
                  <p className="font-medium">Formula Description:</p>
                  <p className="mt-2">
                    {inputs.formula === 'formula1' 
                      ? 'Formula 1: (Input1 + Input2) × Input3 - Input4 ÷ Input5'
                      : 'Formula 2: (Input1 × Input2) + (Input3 - Input4) × Input5'
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
