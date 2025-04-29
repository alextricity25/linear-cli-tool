import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { formatOutput } from '../src/utils/output.js';

describe('Output Formatting', () => {
  let consoleLogSpy: any;
  
  beforeEach(() => {
    consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });
  
  afterEach(() => {
    consoleLogSpy.mockRestore();
  });
  
  it('should output JSON when format is json', () => {
    const testData = { id: 1, name: 'Test' };
    const textFormatter = vi.fn();
    
    formatOutput(testData, 'json', textFormatter);
    
    expect(consoleLogSpy).toHaveBeenCalledWith(JSON.stringify(testData, null, 2));
    expect(textFormatter).not.toHaveBeenCalled();
  });
  
  it('should use text formatter when format is text', () => {
    const testData = { id: 1, name: 'Test' };
    const textFormatter = vi.fn();
    
    formatOutput(testData, 'text', textFormatter);
    
    expect(textFormatter).toHaveBeenCalledWith(testData);
  });
  
  it('should default to text format when not specified', () => {
    const testData = { id: 1, name: 'Test' };
    const textFormatter = vi.fn();
    
    formatOutput(testData, undefined, textFormatter);
    
    expect(textFormatter).toHaveBeenCalledWith(testData);
  });
});