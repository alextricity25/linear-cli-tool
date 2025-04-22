import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { setApiKey, getApiKey, clearApiKey } from '../src/utils/linear.js';

// Mock the Conf module
vi.mock('conf', () => {
  const mockSet = vi.fn();
  const mockGet = vi.fn();
  const mockDelete = vi.fn();

  return {
    default: vi.fn().mockImplementation(() => ({
      set: mockSet,
      get: mockGet,
      delete: mockDelete
    }))
  };
});

describe('Configuration Utilities', () => {
  let mockConf: any;

  beforeEach(() => {
    // Get the mocked Conf instance
    mockConf = (await import('conf')).default.mock.results[0].value;
    
    // Clear mocks before each test
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('setApiKey', () => {
    it('should save the API key to configuration', () => {
      const testKey = 'test_api_key_12345';
      setApiKey(testKey);
      
      expect(mockConf.set).toHaveBeenCalledWith('apiKey', testKey);
      expect(mockConf.set).toHaveBeenCalledTimes(1);
    });
  });

  describe('getApiKey', () => {
    it('should retrieve the API key from configuration', () => {
      const testKey = 'test_api_key_12345';
      mockConf.get.mockReturnValue(testKey);
      
      const apiKey = getApiKey();
      
      expect(apiKey).toBe(testKey);
      expect(mockConf.get).toHaveBeenCalledWith('apiKey');
      expect(mockConf.get).toHaveBeenCalledTimes(1);
    });

    it('should return undefined when no API key is set', () => {
      mockConf.get.mockReturnValue(undefined);
      
      const apiKey = getApiKey();
      
      expect(apiKey).toBeUndefined();
      expect(mockConf.get).toHaveBeenCalledWith('apiKey');
    });
  });

  describe('clearApiKey', () => {
    it('should delete the API key from configuration', () => {
      clearApiKey();
      
      expect(mockConf.delete).toHaveBeenCalledWith('apiKey');
      expect(mockConf.delete).toHaveBeenCalledTimes(1);
    });
  });
});