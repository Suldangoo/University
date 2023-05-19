using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameDirector : MonoBehaviour
{
    int score = 0;
    Text scoreText; // Score ������Ʈ�� Text ������Ʈ�� �Ҵ��� ����

    void Start()
    {
        // Text ������Ʈ�� Find�Ͽ� �Ҵ�
        scoreText = GameObject.Find("Score").GetComponent<Text>();
    }

    public void ScoreUp()
    {
        score += 10; // ���� ����
        scoreText.text = "���� : " + score + "��"; // �ؽ�Ʈ ����
    }
}