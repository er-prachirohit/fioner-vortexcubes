import json
import sys

try:
    with open(r'C:\Users\mrume\.gemini\antigravity\brain\a27751cd-461b-4510-b2dd-c5c9f8a5575a\.system_generated\logs\transcript.jsonl', 'r', encoding='utf-8') as f:
        for line in f:
            j = json.loads(line)
            if j.get('source') == 'USER_EXPLICIT':
                print(f"--- Step {j.get('step_index')} ---")
                content = j.get('content', '')
                if len(content) > 200:
                    print(content[:200] + '... [TRUNCATED]')
                else:
                    print(content)
except Exception as e:
    print(e)
